<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const languages = ref([
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
])

const setLang = (code) => {
    localStorage.setItem("language", code);
    getLang();
}

const getLang = () => {
    const lang = localStorage.getItem("language");
    if (lang) {
        locale.value = lang;
    }
}

</script>
<template>

    <div>
        <div class="languages">
            <button v-for="language in languages" :key="languages.key" @click="setLang(language.code)"
                :style="language.code == locale ? 'background-color:#333; color:white' : ''">
                {{ language.name }}
            </button>
        </div>

        <h2 class="head-2">
            {{ $t('hello_world') }}
        </h2>
    </div>

</template>
<style scoped>
.languages {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.active {
    background-color: #333;
    color: white;
}

.languages button {
    border: 1px solid #333;
    padding: 10px 40px;
    cursor: pointer;

}

.head-2 {
    color: #333;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}
</style>