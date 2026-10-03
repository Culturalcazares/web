<script setup lang="ts">
import HeaderBanner from '@/components/HeaderBanner.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import ProgramSection from '@/components/ProgramSection.vue'
import SponsorsSection from '@/components/SponsorsSection.vue'
import CollaboratorsSection from '@/components/CollaboratorsSection.vue'
import OrganizersSection from '@/components/OrganizersSection.vue'
</script>

<template>
  <div>
    <HeaderBanner />
    <SectionDivider />
    <SectionDivider />
    <ProgramSection />
    <SectionDivider />
    <OrganizersSection />
    <SponsorsSection />
    <CollaboratorsSection />
    <SectionDivider />
  </div>
</template>
