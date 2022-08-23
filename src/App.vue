<template>
    <Container>
        <Notification/>
        <Navbar />
        <router-view></router-view>
        <Footer />
    </Container>
</template>

<script>

import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';


export default {
    name: 'App',
    components: { Navbar, Footer }
}
</script>

<style>


</style>