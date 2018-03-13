
import '../assets/style/footer.styl'
export default {
    data() {
        return {
            author: "Eric"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>by {this.author}</span>
            </div>
        )
    }
}