<template>
    <div class="filter-wrapper" ref="filterWrapper">
        <misa-button
            :label="resource.button.filter"
            hasIcon
            type="filter"
            icon="filter"
            @handleBtnClick="showFilterContent = !showFilterContent"
        ></misa-button>
        <div v-if="showFilterContent" class="filter-content">
            <div class="filter-header">
                <div>
                    <h3>{{ filterTitle }}</h3>
                </div>
                <div class="filter-btn-close">
                    <misa-icon type="close" @handleIconClick="handleCloseFilter"></misa-icon>
                </div>
            </div>
            <div class="filter-body">
                <div v-for="(item, index) in filterList" :key="index" class="filter-item">
                    <misa-combobox 
                        :label="item.title" 
                        :options="item.content" 
                        v-model="filterSelected[index]" 
                        titleGray
                    ></misa-combobox>
                </div>
            </div>
            <hr>
            <div class="filter-footer">
                <misa-button :label="resource.button.apply" type="primary" @handleBtnClick="handleFilterKey"></misa-button>
                <misa-button :label="resource.button.cancel" type="secondary" @handleBtnClick="handleCloseFilter"></misa-button>
            </div>
        </div>
    </div>
</template>

<script>
import { useOnClickOutside } from '@/js/composable/click-outside';

export default {
    props: {
        'filterTitle': String,
        'filterList': Array,
    },

    emits: ['handleFilterValue'],

    setup() {
        const defaultSeletedValue = 999;

        return {
            defaultSeletedValue
        }
    },

    data() {
        return {
            filterSelected: Array(this.filterList.length).fill(this.defaultSeletedValue),
            showFilterContent: false,
            resource: this.$resource[this.$langCode]
        }
    },

    mounted() {
        const containerRef = this.$refs.filterWrapper;
        /**
         * Đóng Filter khi click ra ngoài
         * @author DVHIEU 19-8-2023
         */
        useOnClickOutside(containerRef, () => {
            this.handleCloseFilter();
        });
    },

    methods: {
        /**
         * Hàm đóng filter
         * @author DVHIEU 19-8-2023
         */
        handleCloseFilter() {
            this.showFilterContent = false;
        },

        /**
         * Hàm lọc kết quả
         * @author DVHIEU 19-8-2023
         */
        handleFilterKey() {
            let filterCount = 0;
            let filterKey = {};
            this.filterSelected.forEach((value, index) => {
                if (value != this.defaultSeletedValue) {
                    filterCount += 1;
                    filterKey[this.filterList[index].key] = value;
                } else {
                    filterKey[this.filterList[index].key] = null;
                }
            });

            this.$emit('handleFilterValue', filterKey, filterCount);
            this.handleCloseFilter();
        },
    },
}
</script>

<style>
@import url(../../css/base/misa-filter.css);
</style>