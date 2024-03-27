<template>

    <div id="wrapper">

        <!-- Sidebar -->

        <Sidebar :toggled="toggled" />

        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->

                <Topbar @emitToggled="toggled=$event"/>

                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <router-view />

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->

            <Footer />

            <!-- End of Footer -->

        </div>

        <!-- End of Content Wrapper -->

    </div>

</template>

<script setup>

import { ref } from 'vue';

import Sidebar from '@/layouts/SidebarComponent.vue';
import Topbar from '@/layouts/TopbarComponent.vue';
import Footer from '@/layouts/FooterComponent.vue';

const toggled = ref('');

</script>
