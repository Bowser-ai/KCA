<template>
  <div class="container">
    <div v-show="message" class="message"> {{ message }} </div>
    <button
      class="btn add-mededeling-btn"
      role="button"
      @click="toggleAddMededelingModal"
      >
        Mededeling toevoegen
    </button>
    <Pagination
      @paginationChanged="changePagination($event)"
      v-if="showPagination"
      :resultAmount="resultSet.length"
    />
    <div class="modal" v-if="showAddMededelingModal">
      <div class="modal-body">
        <p class="modal-body-text">Mededeling toevoegen</p>
        <span class="input-field">
          <label for="modal-filiaal-nummer">FiliaalNummer:</label>
          <input
            style="width: 4.5em;"
            type="Number"
            id="modal-filiaal-nummer"
            data-role="input-filiaalnummer"
          >
        </span>
        <span class="input-field">
          <label for="modal-mededeling">Mededeling:</label>
          <textarea
            id="modal-mededeling"
            data-role="input-mededeling"
            cols="50"
            rows="5"
          />
        </span>
        <div class="modal-btns">
          <button
            role="button"
            class="modal-btn"
            @click="addMededeling"
          >
            Toevoegen
          </button>
          <button
            @click="toggleAddMededelingModal"
            role="button"
            class="modal-btn"
          >
            Annuleren
          </button>
        </div>
      </div>
    </div>
    <div class="results">
      <FiliaalCard
        v-for="mededeling in results"
        :key="mededeling.filiaalnummer"
        :filiaal="mededeling"
      >
        <button
          v-if="editMode[mededeling.filiaalnummer]"
          role="button"
          class="btn edit-mededeling-btn"
          @click="editMededeling($event, mededeling)"
        >
          Opslaan
        </button>
        <button
          v-else
          @click="enableEditMode($event, mededeling.filiaalnummer)"
          role="button"
          class="btn edit-mededeling-btn"
        >
          Aanpassen
        </button>
      </FiliaalCard>
    </div>
  </div>
</template>

<script>
import FiliaalCard from '@/components/FiliaalCard';
import Pagination from '@/components/Pagination';

import PaginationMixin from '@/mixins/PaginationMixin';

export default {
  mixins: [PaginationMixin],
  components: {
    FiliaalCard,
    Pagination,
  },
  props: {
    filialen: {
      type: Object,
    }
  },
  data() {
    return {
      showAddMededelingModal: false,
      editMode: {},
      message: '',
    };
  },
  computed: {
    resultSet() {
      return Object.values(this.filialen).filter(
        filiaal => filiaal.mededeling
      ).map(
        filiaal => ({
          filiaalnummer: filiaal['filiaalnummer'],
          address: filiaal['address'],
          mededeling: filiaal['mededeling']
        })
      );
    },
    results() {
      return this.currentPaginatedResultSet.length === 0 ?
        this.resultSet.slice(0, process.env.VUE_APP_PAGINATION_SIZE) :
        this.currentPaginatedResultSet;
    }
  },
  methods: {
    toggleAddMededelingModal() {
      this.showAddMededelingModal = !this.showAddMededelingModal;
      this.toggleScrolling();
    },
    toggleScrolling() {
      const bodyEl = document.querySelector('body');
      if (this.showAddMededelingModal) {
        bodyEl.style.overflow = 'hidden';
      } else {
        bodyEl.style.overflow = 'auto';
      }
    },
    enableEditMode(e, filiaalnummer) {
      if (!this.elementCache) this.elementCache = {}
      this.editMode[filiaalnummer] = true;
      const textarea = document.createElement('textarea');
      textarea.setAttribute('rows', 5);
      const mededelingParagraph = e.target.parentNode.querySelector('.mededeling');
      this.elementCache.mededelingParagraph = mededelingParagraph;
      textarea.innerHTML = mededelingParagraph.innerText;
      mededelingParagraph.replaceWith(textarea);
      textarea.classList.add('edit-mededeling');
    },
    disableEditMode(filiaalnummer) {
      this.editMode[filiaalnummer] = false;
      const mededelingParagraph = this.elementCache.mededelingParagraph;
      const textarea = document.querySelector('.edit-mededeling');
      textarea.replaceWith(mededelingParagraph);
    },
    editMededeling(e, filiaal) {
      const mededeling = e.target.parentNode.querySelector('.edit-mededeling').value;
      filiaal.mededeling = mededeling;
      this.updateMededeling(filiaal);
      this.disableEditMode(filiaal.filiaalnummer);
    },
    addMededeling() {
      const filiaalnummer = document.querySelector('[data-role="input-filiaalnummer"]').value;
      const filiaal = this.filialen[filiaalnummer];
      if (filiaal === undefined) {
        this.setMessage(`Filiaal met nummer: ${filiaalnummer} bestaat niet`, false);
      }
      else {
        const mededeling = document.querySelector('[data-role="input-mededeling"]').value;
        if (filiaal.mededeling) {
          filiaal.mededeling += '\n' + mededeling;
        }
        else {
          filiaal.mededeling = mededeling;
        }
        this.updateMededeling(filiaal);
      }
      this.toggleAddMededelingModal();
    },
    async updateMededeling(filiaal) {
      try{
        await this.$store.dispatch('addMededeling', filiaal);
        if (filiaal.mededeling) {
          this.setMessage(`Mededeling toevoegd aan filiaal met nummer: ${filiaal.filiaalnummer}`, true);
        }
        else {
          this.setMessage(`Mededeling verwijderd van filiaal met nummer: ${filiaal.filiaalnummer}` ,true);
        }
      }
      catch (error) {
        this.setMessage(error, false);
      }
    },
    setMessage(msg, isSuccessFull) {
      this.message = msg;
      const addedClass = isSuccessFull ? 'success' : 'error'
      const messageElem = document.querySelector('.message');
      messageElem.classList.add(addedClass);
      setTimeout(() => {
        messageElem.classList.remove(addedClass);
        this.message = '';
      }, 3000);
    },
  }
}
</script>

<style scoped>
  .container {
    margin-top: 11em;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 3;
    pointer-events: auto;
  }

  .input-field {
    display: flex;
    text-align: left;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: #dc7f7f;
    box-shadow: 5px 5px 5px 5px black;
    padding: 1em;
  }

  .modal-body > span {
    margin-top: 1.0em;
  }

  .modal-body label {
    margin-right: 1em;
    width: 7em;
  }

  .modal-btns {
    display: flex;
    margin-top: 2em;
    justify-content: space-evenly;
  }

  .modal-btn {
    cursor: pointer;
  }

  .error {
    font-size: 1.2em;
    color: #4a3030;
    font-weight: 800;
  }

  .add-mededeling-btn {
    font-size: 1.1em;
    margin-bottom: 0.9em;
  }

  .error {
    display: flex;
    background-color: red;
  }

  .success {
    display: flex;
    background-color: #aeeaaefc;
  }

  .message {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    transform: translateX(50%);
    font-size: 1.4em;
    position: fixed;
    width: 50%;
    padding: 1em;
    height: 3.0em;
    border-radius: 2em;
  }
</style>