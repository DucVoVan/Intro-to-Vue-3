app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        `<div class="product-display">
            <div class="product-container">
             ...
            </div>
            <review-form></review-form>
        </div>`
})