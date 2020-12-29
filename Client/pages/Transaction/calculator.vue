<template>
    <navbar>
        <div class="calculator">
            <label for="person" class="eachlabel">
                Anzahl von Personen:
                <br>
                <input id="person" class="form-control" type="number" v-model="persons">
            </label>
            <label for="hours" class="eachlabel">
                Stunden:
                <br>
                <input id="hours" class="form-control" type="number" v-model="hours">
            </label>
            <br><br>
            <button class="btn" @click="showNumberHookah">Berechnen</button>
            <hr>
                <div v-if="hookah > 0">
                    <p>Wir empfehlen Ihnen:</p>
                    <ul>
                        <li>{{hookah}} x Shisha</li>
                        <li v-if="head > 1">{{head}} x {{headMultiple}}</li>
                        <li v-else>{{head}} x {{headSingle}}</li>
                        <li>{{coal}} x Kohlen</li>
                    </ul>
                </div>
        </div>
    </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
    data() {
        return {
            persons: 0,
            hookah: 0,
            head: 0,
            coal: 0,
            hours: 0,
            hoursInMinutes: 60,
            headSingle: "Kopf",
            headMultiple: "Köpfe"
        }
    },
    components: {
        "navbar": Navbar,
    },
    methods: {
        showNumberHookah(){
            this.hookah = 0;
            this.head = 0;
            this.coal = 0;
            var hour = Math.ceil(this.hours);
            if(this.persons <= 0){
                alert("Bitte geben sie eine Zahl größer null an!")
            }
            else if(this.persons <= 4){
                this.hookah += 1;
                this.head = hour * 1;
                this.coal = this.head * 3;
            }
            else {
                this.hookah = Math.ceil(this.persons / 4);
                this.head = (hour * 1) * this.hookah;
                this.coal = this.head * 3;
            }
        }
    },
    
}
</script>

