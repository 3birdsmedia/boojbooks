<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="results">
                    <div v-show="loading" class="spinner-border text-center" role="status">
                        <span class="visually-hidden">&nbsp;</span>
                    </div>
                    <div v-if="myBooks !== []" class="row">
                       <div class="col-6 justify-content-center align-items-center">
                           By Title:
                           <button class="btn btn-primary" v-on:click="sortBy('title', 'asc')">&uarr;</button>
                           <button class="btn btn-primary" v-on:click="sortBy('title', 'desc')">&darr;</button>
                       </div>
                       <div class="col-6 justify-content-center align-items-center">
                           By Author:
                           <button class="btn btn-primary" v-on:click="sortBy('authors', 'asc')">&uarr;</button>
                           <button class="btn btn-primary" v-on:click="sortBy('authors', 'desc')">&darr;</button>
                       </div>
                        
                    </div>
                    <ul class="list-unstyled">
                        <li v-for='(book, key) in myBooks' class="row ">
                        <div class="col-2 align-items-center">
                            <button class="btn btn-warning" v-on:click="removeBook(book.id, key)">-</button>
                        </div>
                        <div class="col-10 align-items-center">
                            <div class="font-weight-bold title">
                                <a class="navbar-brand" :href="'/book?id='+book.id">
                                {{ book.volumeInfo.title }}
                                </a>
                            </div>
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
</template>
<style lang="scss" scoped>
    li {
        border-bottom: 1px solid #ccc;
        padding: 1em;
    }
</style>
<script>
    export default {
        data() {
            return {
                message: "Get started by searching for one of your favorite books",
                myBooks: this.$store.state.myBooks,
                loading: false

            }
        },
        methods: {
            removeBook (id, key)  {
                console.log("Removing "+id+" "+key+" from list")
                this.$store.commit("removeBook", key)
                this.myBooks = this.$store.state.myBooks
            },
            sortBy(field, direction){
                console.log("Sorting by " + field)
                this.$store.commit("sortBooks", {field, direction})
                this.myBooks = this.$store.state.myBooks
            }
        },
        mounted() {
            console.log('Books list mounted.')
            console.log(this.$store.state.myBooks)
        }
    }
</script>
