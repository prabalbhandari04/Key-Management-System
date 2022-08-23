<template>
    <div>
        <PasswordForm 
            link="Insert a key to encrypt the credentials to a URL."
            placeholder="Type your master password" 
            @error="error"
            @submit="encrypt"
            @button="generator">
             <template v-slot:generator>
                
                
                <i class="fa-solid fa-key"></i> Generate
            </template>
            <template v-slot:button>

                
              <i class="fa-solid fa-lock"></i> Encrypt!
            </template>
        </PasswordForm>
        
        

        <GeneratedUrl 
            v-if="blob" 
            :blob="blob"
            @copied="success" 
            @error="error" />
    </div>
</template>

<script>
import EventBus from '@/lib/eventbus';
import FileAPI from '@/lib/file';
import axios from 'axios';
import PasswordForm from '@/components/PasswordForm';
import GeneratedUrl from '@/components/GeneratedUrl';

export default {
    name: 'Encrypt',
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        blob: '',
    }),
    methods: {
        generator (){
            axios.get('https://passwordinator.herokuapp.com?num=true&char=true&caps=true&len=18')
        }, 
        success() {
            EventBus.$emit('notification', { type: 'success', content: 'Done!'});
        },
        error(e) {
            console.error(e);
            EventBus.$emit('notification', {
                type: 'error',
                content: e.message
            });
        },
        async encrypt(password) {
            try {
                this.blob = await FileAPI.encrypt(this.data, password);
            } catch (e) {
                this.error(e);
            }
        }
    },
    components: { PasswordForm, GeneratedUrl }
}
</script>