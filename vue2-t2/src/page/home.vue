<template>
    <div class="home_container">
        <item-compontent father-component = "home"></item-compontent>
    </div>
</template>
<script>
import itemCompontent  from "../components/itemComponent";
export default {
    components: {itemCompontent},
    create() {
        this.$store.state.score = 0;
    }
}
</script>

