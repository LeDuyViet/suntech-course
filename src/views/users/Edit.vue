<template>
    <div>
        User 
        <p>{{ $route.params.id }}</p>
        <user-form />
    </div>
</template>

<script>
import UserForm from "./Form.vue"
export default {
    components: {
        UserForm,
    }
}
</script>
