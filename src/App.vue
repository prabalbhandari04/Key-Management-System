<template>
    <Container>
        <Notification/>
        <Navbar />
        <router-view></router-view>
        <Credits/>
    </Container>
</template>

<script>

import Navbar from '@/components/Navbar';

import Credits from '@/components/Credits';

export default {
    name: 'App',
    components: { Navbar, Credits }
}
</script>

<style>

</style>