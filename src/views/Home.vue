<template>
    <div>
        <Jumbo v-bind="{ picture, title, description }"/>
        
        <QuickStart/>
    </div>
</template>

<script>
import Jumbo from '@/components/Jumbo';
import QuickStart from '@/components/QuickStart';

export default {
    name: 'Home',
    data: () => ({
        
        
        
    }),
    components: { Jumbo, QuickStart }
}
</script>