<template>
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                            <div v-show="loading" class="spinner-border text-center" role="status">
                                <span class="visually-hidden">&nbsp;</span>
                            </div>
                        <div class="results" v-if="book !== ''">
                            <div class="col-10">
                                <div class=""><img :src="book.volumeInfo.imageLinks.small" /></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    li {
        border-bottom: 1px solid #ccc;
        padding: 0.5em;
    }
</style>
<script>
    export default {
        props: ['bookId'],
        data() {
            return {
                book: '',
                loading: true

            }
        },
        mounted() {
            console.log('Loading.' + this.bookId )
            axios.get("https://www.googleapis.com/books/v1/volumes/"+this.bookId)
            //axios.get("https://www.googleapis.com/books/v1/volumes/nnSf3I87sH8C")
            .then(response => {
                console.log(response);
                this.book = response.data;
                this.loading=false
            })
            .catch(err => {
                console.log(err);
            })
            console.log('Component mounted.')
        }
    }
</script>
