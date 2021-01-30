export default {
    state: {
        myBooks: []
    },

    getters: {
        getMyBooks: state => {
            //take parameter state
            return state.myBooks;
        }
    },
    setters: {
        addToMyBooks(state) {}
    },
    mutations: {
        addBook(state, payload) {
            console.log(`State `, state);
            console.log(`Payload`, payload);
            state.myBooks.push(payload);
        },
        removeBook(state, payload) {
            console.log(`delete state.myBooks[payload]`, payload);
            delete state.myBooks[payload];
            state.myBooks = { ...state.myBooks };
            console.log(`State after removing`, state);
        },
        sortBooks(state, payload) {
            if (payload.field == "title") {
                state.myBooks = _.orderBy(
                    state.myBooks,
                    "id",
                    payload.direction
                );
            } else {
                state.myBooks = _.orderBy(
                    state.myBooks,
                    "volumeInfo.authors",
                    payload.direction
                );
            }
            state.myBooks = { ...state.myBooks };
            console.log(`Sorted Books title`, this.myBooks);
        }
    }
};
