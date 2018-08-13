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
    }
}
</script>


