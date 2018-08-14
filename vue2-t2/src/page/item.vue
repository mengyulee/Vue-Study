<template>
    <div class="item_container">
        <item-component father-component = "item"></item-component>
    </div>
</template>
<script>
import itemComponent  from "../components/itemComponent";
export default {
    components: {
        itemComponent
    },
    create() {
        this.$store.state.itemNum = 1;
    }
}
</script>


