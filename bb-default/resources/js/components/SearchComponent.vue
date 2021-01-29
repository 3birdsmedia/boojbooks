<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">{{ message }}</div>
                        <div class="card-body">
                        <input type="text" v-model="searchTerm">
                        <div class="btn" v-on:click="getBooks">SEARCH</div>
                        <div class="results">
                            <div v-show="loading" class="spinner-border text-center" role="status">
                                <span class="visually-hidden">&nbsp;</span>
                            </div>
                            <ul class="list-unstyled">
                                <li v-for='book in books' class="row">
                                <div class="col-2">
                                    <button class="btn btn-success" v-on:click="addToList(book.id)">+</button>
                                </div>
                                <div class="col-10">
                                    <div class="font-weight-bold title">{{ book.volumeInfo.title }}</div>
                                    <div class="text-muted subtitle ">{{ book.volumeInfo.subtitle }}</div>
                                    <div class="font-weight-light author" v-if="book.volumeInfo.authors != ''"> 
                                        By: 
                                        <span v-for='(author, key) in book.volumeInfo.authors'>
                                            {{ author }}
                                            <span v-if="key != book.volumeInfo.authors.length - 1">, </span>
                                        </span>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    li {
        border-bottom: 1px solid var(--purple);
        padding: 1em;
    }
</style>
<script>
    export default {
        data() {
            return {
                message: "Get started by searching for one of your favorite books",
                books: '',
                searchTerm: '',
                loading: false

            }
        },
        methods: {
            getBooks: function() {
                this.loading=true
                console.log(this.searchTerm);
                axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.searchTerm)
                .then(response => {
                    console.log(response);
                    this.books = response.data.items;
                    this.loading=false
                })
                .catch(err => {
                    console.log(err);
                })

            },
            addToList: (id) => {
                console.log("Added "+id+" to list");
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
