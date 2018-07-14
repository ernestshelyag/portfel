<template>

    <div class="briefcase wrp">
        <div class="briefcase__container">
            <div class="header">
                <div class="header__input-block">
                    <input type="text" placeholder="Search">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.69303 8.51615C5.22673 8.51615 5.73781 8.4361 6.21361 8.28748C7.13669 7.99916 8.21069 7.99732 8.92689 8.64714L11.3319 10.8293C11.4152 10.9048 11.5192 10.9426 11.6337 10.9426C11.7482 10.9426 11.8522 10.9048 11.9355 10.8293C12.102 10.6782 12.102 10.4328 11.9355 10.2817L9.78365 8.3293C8.9621 7.58389 8.97622 6.30692 9.25909 5.23427C9.34194 4.92014 9.38605 4.59311 9.38605 4.25807C9.38605 1.90716 7.28408 0 4.69303 0C2.11238 0 0 1.91661 0 4.25807C0 6.60898 2.11238 8.51615 4.69303 8.51615ZM4.69303 0.774195C6.81582 0.774195 8.53278 2.34147 8.53278 4.25807C8.53278 6.18412 6.81582 7.74195 4.69303 7.74195C2.57024 7.74195 0.853278 6.17468 0.853278 4.25807C0.853278 2.34147 2.58064 0.774195 4.69303 0.774195Z" transform="translate(0.939697 0.528717)" fill="#8A91A2"/>
                    </svg>
                </div>
                <el-checkbox class="header__checkbox">Hide small assets</el-checkbox>
                <div class="header__value-block">
                    <span class="header__text">
                        Estimated Value:
                    </span>
                    <span class="header__num">0.29873172 BTC</span>
                    <i>/</i>
                    <span class="header__num">$1.998.52</span>
                </div>
            </div>
            <div class="briefcase__content">
                <el-table
                        :data="tableData"
                        style="width: 100%"
                        header-row-class-name="custom-table-header"
                        row-class-name="custom-table-row">
                    <el-table-column
                            prop="coin"
                            label="Coin"
                            class-name="coin">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Name">
                    </el-table-column>
                    <el-table-column
                            prop="totalBalance"
                            label="Total Balance">
                    </el-table-column>
                    <el-table-column
                            prop="availableBalance"
                            label="Available Balance">
                    </el-table-column>
                    <el-table-column
                            prop="inOrder"
                            label="In Order">
                    </el-table-column>
                    <el-table-column
                            prop="btcValue"
                            label="BTC Value">
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "briefcase",
        data() {
            return {
                tableData: [
                    {
                        coin: "BNB",
                        name: "Binance Coin",
                        totalBalance: "6.63520487",
                        availableBalance: "6.63520487",
                        inOrder: "0.00000000",
                        btcValue: "6.63520487"
                    },
                    {
                        coin: "BNB",
                        name: "Binance Coin",
                        totalBalance: "6.63520487",
                        availableBalance: "6.63520487",
                        inOrder: "0.00000000",
                        btcValue: "6.63520487"
                    },
                    {
                        coin: "BNB",
                        name: "Binance Coin",
                        totalBalance: "6.63520487",
                        availableBalance: "6.63520487",
                        inOrder: "0.00000000",
                        btcValue: "6.63520487"
                    },
                    {
                        coin: "BNB",
                        name: "Binance Coin",
                        totalBalance: "6.63520487",
                        availableBalance: "6.63520487",
                        inOrder: "0.00000000",
                        btcValue: "6.63520487"
                    },
                    {
                        coin: "BNB",
                        name: "Binance Coin",
                        totalBalance: "6.63520487",
                        availableBalance: "6.63520487",
                        inOrder: "0.00000000",
                        btcValue: "6.63520487"
                    },
                    {
                        coin: "BNB",
                        name: "Binance Coin",
                        totalBalance: "6.63520487",
                        availableBalance: "6.63520487",
                        inOrder: "0.00000000",
                        btcValue: "6.63520487"
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">

    @import "@/scss/mixins.scss";

    .el-table th, .el-table tr {
        background-color: $bg-gray;
    }
    .el-table td, .el-table th.is-leaf {
        border-bottom: none;
    }
    .coin {
        color: #fff;
        &.is-leaf {
            color: $font-sky;
        }
    }
    .custom-table-header {
        color: $font-sky;
    }
    .custom-table-row {
        color: $font-gray;
        background-color: $bg-gray;
    }
    .briefcase {
        &__container {
            background: $bg-gray;
            border: solid 1.5px $font-gray;
            border-radius: 2px;
        }
        &__content {
            padding: 40px;
        }
    }
    .header {
        padding: 16px 33px 16px;
        border-bottom: solid 2px #8A91A2;
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        &__input-block {
            width: 248px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: solid 2px $font-gray;
            border-radius: 2px;
            padding: 0 8px 0 15px;
            margin-right: 24px;
        }
        &__checkbox {
            color: #fff;
        }
        &__value-block {
            flex-grow: 1;
            text-align: right;
            i {
                padding: 0 5px;
            }
        }
        &__text {
            color: $font-gray;
            padding-right: 5px;
        }
        &__num {
            color: $font-sky;
        }
    }
    @import url("//unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css");
    
</style>