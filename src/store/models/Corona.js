import axios from "axios";
const state = {
  corona: [],
  country: [],
  arrPerPage: [],
  perPage: 6,
  numberOfPages: 0,
  currentPage: 0,
  indStart: 0,
  indEnd: 0,
  searching: false
};

const getters = {
  allCorona: state => state.corona,
  CoronaPage: state => state.currentPage,
  indStart: state => state.indStart,
  indEnd: state => state.indEnd,
  arrPerPage: state => state.arrPerPage,
  sngCountry: state => state.country,
  isSearching: state => state.searching
};
const actions = {
  async fetchAllCorona({ commit }) {
    const response = await axios.get("https://api.covid19api.com/summary");

    // console.log(response.data);

    commit("setCorona", response.data);
  },
  async filterCountry({ commit }, country) {
    const response = await axios.get(
      `https://api.covid19api.com/dayone/country/${country}/status/confirmed`
    );
    console.log(response);

    commit("singleCorona", response.data);
  },
  nextPage({ commit }) {
    if (state.currentPage < state.numberOfPages) {
      commit("changePage", state.currentPage + 1);
    } else {
      commit("changePage", state.numberOfPages);
    }
  },
  prewPage({ commit }) {
    if (state.currentPage > 1) {
      commit("changePage", state.currentPage - 1);
    } else {
      commit("changePage", 1);
    }
  },
  coronaPerPage({ commit }) {
    const arr = [];
    for (let i = state.indStart; i < state.indEnd; i++) {
      arr.push(state.corona.Countries[i]);
    }
    commit("coronaPerPage", arr);
  }
};
const mutations = {
  setCorona: (state, corona) => {
    state.corona = corona;
    state.currentPage = 1;

    state.numberOfPages =
      Math.floor(corona.Countries.length / state.perPage) + 1;
    // console.log(state.currentPage);
  },
  singleCorona: (state, country) => {
    state.country = country;
    state.searching = true;
    // console.log(state.country);
  },
  changePage: (state, currentPage) => {
    state.currentPage = currentPage;
    state.indend = state.currentPage * 6 - 1;
    state.indStart = state.indend - 6;
    //console.log(state.currentPage);
    console.log(state.indStart);
    console.log(state.indEnd);
  },
  coronaPerPage: (state, arrPerPage) => {
    state.arrPerPage = arrPerPage;
    console.log(state.arrPerPage);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
