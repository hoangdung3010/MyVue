<template>
    <div class="sidebar" :class="{'sidebar--collapse': isCollapse}" ref="sidebar">
        <div class="nav-wrapper">
            <div v-for="(item, index) in navItems" :key="index" class="nav-main">
                <hr v-if="item.hasBorderTop"/>
                <router-link :to="item.link" class="nav-item" :class="{'nav-active': item.active}">
                    <div class="nav-content">
                        <misa-icon :type="item.iconType"></misa-icon>
                        <div v-if="!isCollapse" class="nav__text">{{ item.title }}</div>
                    </div>
                    <misa-icon v-if="item.children && !isCollapse" type="arrow-right"></misa-icon>
                </router-link>
            </div>
        </div>   
        <div class="nav-collapse" @click="isCollapse = !isCollapse">
            <div class="nav-content">
                <misa-icon type="collapse" :rotate="isCollapse"></misa-icon>
                <div v-if="!isCollapse" class="nav__text">{{ menuResource.collapse }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        let menuResource = this.$resource[this.$langCode].menu;

        let navItems = [
            {
                title: menuResource.dashboard,
                iconType: 'dashboard',
                link: '/',
                active: false
            },
            {
                title: menuResource.movement,
                iconType: 'movement',
                children: [],
                link: '/r',
                active: false
            },
            {
                title: menuResource.reward,
                iconType: 'reward',
                children: [],
                link: '/r',
                active: false
            },
            {
                title: menuResource.decision,
                iconType: 'decision',
                children: [],
                link: '/r',
                active: false
            },
            {
                title: menuResource.profile,
                iconType: 'profile',
                children: [],
                link: '/r',
                active: false
            },
            {
                title: menuResource.search,
                iconType: 'search',
                children: [],
                link: '/r',
                active: false
            },
            {
                title: menuResource.report,
                iconType: 'report',
                link: '/r',
                active: false
            },
            {
                title: menuResource.category,
                iconType: 'category',
                children: [],
                link: '/emulation',
                active: true,
                hasBorderTop: true
            },
            {
                title: menuResource.setting,
                iconType: 'setting',
                children: [],
                link: '/r',
                active: false
            },
            {
                title: menuResource.guide,
                iconType: 'guide',
                children: [],
                link: '/r',
                active: false,
                hasBorderTop: true
            }
        ];

        return {
            menuResource,
            navItems,
            isCollapse: false,
        };
    },
}
</script>

<style scoped>
@import url(../../css/layout/the-menu.css);
</style>