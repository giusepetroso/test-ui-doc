<template>
    <div class="showroom">
        <!-- ── Hero ───────────────────────────────── -->
        <header class="showroom__hero">
            <div class="showroom__hero-inner">
                <p class="showroom__eyebrow">Visual Reference</p>
                <h1 class="showroom__title">
                    bitboss<span class="showroom__title-accent">·ui</span>
                </h1>
                <p class="showroom__subtitle">
                    Component atlas — every UI primitive, rendered and ready
                </p>
                <nav class="showroom__nav">
                    <a
                        v-for="section in sections"
                        :key="section.id"
                        :href="'#' + section.id"
                        class="showroom__nav-link"
                    >
                        {{ section.label }}
                    </a>
                </nav>
            </div>
        </header>

        <main class="showroom__main">
            <!-- ── 01 · Feedback ──────────────────────── -->
            <section id="feedback" class="showroom__section">
                <div class="showroom__section-header">
                    <span class="showroom__section-index">01</span>
                    <h2 class="showroom__section-title">Feedback</h2>
                    <div class="showroom__section-tags">
                        <span>BbAlert</span><span>BbBadge</span><span>BbChip</span
                        ><span>BbProgress</span><span>BbSpinner</span><span>BbToast</span>
                    </div>
                </div>

                <!-- BbAlert -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbAlert</div>
                    <div class="showroom__demo-row showroom__demo-row--vertical">
                        <BbAlert
                            title="Operation successful"
                            text="Your changes have been saved. The deployment is underway."
                        />
                        <BbAlert
                            class="bb-alert--danger"
                            title="Connection failed"
                            text="Unable to reach the remote server. Check your network settings."
                            :show-close="true"
                        />
                        <BbAlert
                            class="bb-alert--info"
                            title="New version available"
                            text="A new release with performance improvements is ready to install."
                        />
                        <BbAlert
                            class="bb-alert--warning"
                            title="Rate limit approaching"
                            text="You have used 87% of your monthly API quota."
                        />
                    </div>
                </div>

                <!-- BbBadge -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbBadge</div>
                    <div class="showroom__card">
                        <div class="showroom__demo-row">
                            <div class="showroom__item-label">Standalone</div>
                            <BbBadge content="12" />
                            <BbBadge class="bb-badge--danger" content="3" />
                            <BbBadge class="bb-badge--info" content="99+" />
                            <BbBadge class="bb-badge--muted" content="new" />
                        </div>
                        <div class="showroom__demo-row" style="margin-top: 20px">
                            <div class="showroom__item-label">Positioned</div>
                            <BbBadge content="5">
                                <BbAvatar size="md">
                                    <span>JD</span>
                                </BbAvatar>
                            </BbBadge>
                            <BbBadge :content="null" :floating="true">
                                <BbButton>Notifications</BbButton>
                            </BbBadge>
                        </div>
                    </div>
                </div>

                <!-- BbChip -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbChip</div>
                    <div class="showroom__card">
                        <div class="showroom__demo-row">
                            <BbChip text="Design Systems" @click:clear="() => {}" />
                            <BbChip text="Vue 3" @click:clear="() => {}" />
                            <BbChip text="TypeScript" @click:clear="() => {}" />
                            <BbChip text="Vite" :clearable="false" />
                            <BbChip text="Inertia.js" :clearable="false" />
                        </div>
                    </div>
                </div>

                <!-- BbProgress -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbProgress</div>
                    <div class="showroom__card showroom__demo-row--vertical">
                        <div style="width: 100%">
                            <div class="showroom__item-label">67% — Active</div>
                            <BbProgress :model-value="67" />
                        </div>
                        <div style="width: 100%">
                            <div class="showroom__item-label">32% — Pending</div>
                            <BbProgress class="bb-progress--danger" :model-value="32" />
                        </div>
                        <div style="width: 100%">
                            <div class="showroom__item-label">100% — Complete</div>
                            <BbProgress :model-value="100" />
                        </div>
                    </div>
                </div>

                <!-- BbSpinner -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbSpinner</div>
                    <div class="showroom__card">
                        <div class="showroom__spinner-row">
                            <div style="text-align: center">
                                <BbSpinner size="xs" />
                                <div class="showroom__item-label" style="margin-top: 8px">xs</div>
                            </div>
                            <div style="text-align: center">
                                <BbSpinner size="sm" />
                                <div class="showroom__item-label" style="margin-top: 8px">sm</div>
                            </div>
                            <div style="text-align: center">
                                <BbSpinner size="md" />
                                <div class="showroom__item-label" style="margin-top: 8px">md</div>
                            </div>
                            <div style="text-align: center">
                                <BbSpinner size="lg" />
                                <div class="showroom__item-label" style="margin-top: 8px">lg</div>
                            </div>
                            <div style="text-align: center">
                                <BbSpinner size="xl" />
                                <div class="showroom__item-label" style="margin-top: 8px">xl</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BbToast -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbToast</div>
                    <div class="showroom__card">
                        <div class="showroom__toast-preview">
                            <BbButton @click="triggerToast('success')">
                                Trigger Success Toast
                            </BbButton>
                            <BbButton class="bb-button--ghost" @click="triggerToast('error')">
                                Trigger Error Toast
                            </BbButton>
                            <BbButton class="bb-button--ghost" @click="triggerToast('info')">
                                Trigger Info Toast
                            </BbButton>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ── 02 · Inputs ────────────────────────── -->
            <section id="inputs" class="showroom__section">
                <div class="showroom__section-header">
                    <span class="showroom__section-index">02</span>
                    <h2 class="showroom__section-title">Inputs</h2>
                    <div class="showroom__section-tags">
                        <span>BbButton</span><span>BbTextInput</span><span>BbTextarea</span
                        ><span>BbNumberInput</span><span>BbSelect</span>
                    </div>
                </div>

                <!-- BbButton -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbButton — Sizes</div>
                    <div class="showroom__card">
                        <div class="showroom__demo-row" style="align-items: center">
                            <BbButton size="xs">Extra Small</BbButton>
                            <BbButton size="sm">Small</BbButton>
                            <BbButton size="md">Medium</BbButton>
                            <BbButton size="lg">Large</BbButton>
                            <BbButton size="xl">Extra Large</BbButton>
                        </div>
                    </div>
                </div>

                <div class="showroom__group">
                    <div class="showroom__group-label">BbButton — Variants</div>
                    <div class="showroom__card">
                        <div class="showroom__demo-row">
                            <BbButton>Primary</BbButton>
                            <BbButton class="bb-button--ghost">Ghost</BbButton>
                            <BbButton class="bb-button--danger">Danger</BbButton>
                            <BbButton :disabled="true">Disabled</BbButton>
                            <BbButton :loading="buttonLoading" @click="simulateLoad">
                                {{ buttonLoading ? 'Loading…' : 'Auto Loading' }}
                            </BbButton>
                        </div>
                        <div class="showroom__demo-row" style="margin-top: 16px">
                            <BbButton :group="true">First</BbButton>
                            <BbButton :group="true">Second</BbButton>
                            <BbButton :group="true">Third</BbButton>
                        </div>
                    </div>
                </div>

                <!-- Form inputs -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbTextInput · BbTextarea · BbNumberInput</div>
                    <div class="showroom__card">
                        <div class="showroom__input-grid">
                            <BbTextInput
                                v-model="textInput"
                                label="Project name"
                                placeholder="e.g. bitboss-app"
                            />
                            <BbTextInput
                                v-model="textInput"
                                label="Email address"
                                placeholder="you@company.com"
                                type="email"
                                hint="We'll never share your email."
                                :persistent-hint="true"
                            />
                            <BbTextInput
                                v-model="textInput"
                                label="API Key"
                                placeholder="sk-…"
                                :has-errors="true"
                                :errors="['Invalid API key format']"
                            />
                            <BbNumberInput
                                v-model="numberValue"
                                label="Max requests"
                                placeholder="1000"
                            />
                        </div>
                        <div style="margin-top: 20px">
                            <BbTextarea
                                v-model="textareaValue"
                                label="Description"
                                placeholder="Describe your project…"
                                hint="Markdown supported"
                                :persistent-hint="true"
                            />
                        </div>
                    </div>
                </div>

                <!-- BbSelect -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbSelect</div>
                    <div class="showroom__card">
                        <div class="showroom__input-grid">
                            <BbSelect
                                v-model="selectSingle"
                                label="Framework"
                                :items="frameworkItems"
                                placeholder="Choose a framework…"
                            />
                            <BbSelect
                                v-model="selectMultiple"
                                label="Tags"
                                :items="tagItems"
                                :multiple="true"
                                placeholder="Select tags…"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <!-- ── 03 · Data Display ───────────────────── -->
            <section id="data" class="showroom__section">
                <div class="showroom__section-header">
                    <span class="showroom__section-index">03</span>
                    <h2 class="showroom__section-title">Data Display</h2>
                    <div class="showroom__section-tags">
                        <span>BbAvatar</span><span>BbTable</span>
                    </div>
                </div>

                <!-- BbAvatar -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbAvatar — Sizes</div>
                    <div class="showroom__card">
                        <div class="showroom__avatar-row">
                            <div style="text-align: center">
                                <BbAvatar size="xs"><span>XS</span></BbAvatar>
                                <div class="showroom__item-label" style="margin-top: 6px">xs</div>
                            </div>
                            <div style="text-align: center">
                                <BbAvatar size="sm"><span>SM</span></BbAvatar>
                                <div class="showroom__item-label" style="margin-top: 6px">sm</div>
                            </div>
                            <div style="text-align: center">
                                <BbAvatar size="md"><span>MD</span></BbAvatar>
                                <div class="showroom__item-label" style="margin-top: 6px">md</div>
                            </div>
                            <div style="text-align: center">
                                <BbAvatar size="lg"><span>LG</span></BbAvatar>
                                <div class="showroom__item-label" style="margin-top: 6px">lg</div>
                            </div>
                            <div style="text-align: center">
                                <BbAvatar size="xl"><span>XL</span></BbAvatar>
                                <div class="showroom__item-label" style="margin-top: 6px">xl</div>
                            </div>
                            <div style="text-align: center">
                                <BbAvatar
                                    class="bb-avatar--accent"
                                    size="lg"
                                    src="https://i.pravatar.cc/150?img=3"
                                    alt="Avatar"
                                />
                                <div class="showroom__item-label" style="margin-top: 6px">
                                    img
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BbTable -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbTable</div>
                    <div class="showroom__table-wrap">
                        <BbTable :columns="tableColumns" :items="tableItems" />
                    </div>
                </div>
            </section>

            <!-- ── 04 · Navigation ────────────────────── -->
            <section id="navigation" class="showroom__section">
                <div class="showroom__section-header">
                    <span class="showroom__section-index">04</span>
                    <h2 class="showroom__section-title">Navigation</h2>
                    <div class="showroom__section-tags">
                        <span>BbTab</span><span>BbAccordion</span><span>BbBreadcrumbs</span
                        ><span>BbPagination</span>
                    </div>
                </div>

                <!-- BbTab -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbTab</div>
                    <div class="showroom__card">
                        <BbTab v-model="currentTab" :items="tabItems">
                            <template #overview>
                                <div class="bb-tab__pane-content">
                                    <strong style="color: #f4f1ef">Overview</strong> — This panel
                                    shows a summary of the component system. Tabs animate
                                    horizontally and support keyboard navigation with arrow keys.
                                </div>
                            </template>
                            <template #components>
                                <div class="bb-tab__pane-content">
                                    <strong style="color: #f4f1ef">Components</strong> — 40+
                                    production-ready Vue components with full TypeScript support.
                                    Every component is headless-first and themeable via CSS custom
                                    properties.
                                </div>
                            </template>
                            <template #tokens>
                                <div class="bb-tab__pane-content">
                                    <strong style="color: #f4f1ef">Tokens</strong> — Design tokens
                                    are exposed as <code class="showroom__code">--bb-*</code> CSS
                                    variables at the
                                    <code class="showroom__code">:root</code> level, enabling
                                    global theming without preprocessors.
                                </div>
                            </template>
                            <template #changelog>
                                <div class="bb-tab__pane-content">
                                    <strong style="color: #f4f1ef">Changelog</strong> — v2.0.0
                                    shipped with BbTable, BbTree, BbColorPalette, and a new
                                    composable-based toast system.
                                </div>
                            </template>
                        </BbTab>
                    </div>
                </div>

                <!-- BbAccordion -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbAccordion</div>
                    <div class="showroom__card">
                        <BbAccordion
                            v-model="accordion1"
                            :class="{ 'bb-accordion--open': accordion1 }"
                        >
                            <template #header>
                                <div class="accordion-header-row">
                                    <span>What is bitboss-ui?</span>
                                    <svg
                                        class="accordion-chevron"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </template>
                            A design system built for Laravel + Inertia.js applications. Components
                            are headless-first and styled via CSS custom properties for maximum
                            theming flexibility.
                        </BbAccordion>
                        <BbAccordion
                            v-model="accordion2"
                            :class="{ 'bb-accordion--open': accordion2 }"
                        >
                            <template #header>
                                <div class="accordion-header-row">
                                    <span>How does theming work?</span>
                                    <svg
                                        class="accordion-chevron"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </template>
                            Override <code class="showroom__code">--bb-*</code> CSS custom
                            properties on any ancestor element. The components pick up changes
                            through standard CSS cascade — no JavaScript config needed.
                        </BbAccordion>
                        <BbAccordion
                            v-model="accordion3"
                            :class="{ 'bb-accordion--open': accordion3 }"
                        >
                            <template #header>
                                <div class="accordion-header-row">
                                    <span>Is TypeScript supported?</span>
                                    <svg
                                        class="accordion-chevron"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </template>
                            Yes. All components ship with full TypeScript definitions. Props, events,
                            and slots are typed. Generic components like BbTable and BbSelect infer
                            item types from their data.
                        </BbAccordion>
                    </div>
                </div>

                <!-- BbBreadcrumbs -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbBreadcrumbs</div>
                    <div class="showroom__card">
                        <BbBreadcrumbs :items="breadcrumbItems" />
                    </div>
                </div>

                <!-- BbPagination -->
                <div class="showroom__group">
                    <div class="showroom__group-label">BbPagination</div>
                    <div class="showroom__card">
                        <BbPagination
                            v-model="currentPage"
                            :total-pages="12"
                            align="center"
                            label="Page navigation"
                        />
                        <div
                            class="showroom__item-label"
                            style="text-align: center; margin-top: 12px"
                        >
                            Page {{ currentPage }} of 12
                        </div>
                    </div>
                </div>
            </section>

            <!-- ── 05 · Selection ─────────────────────── -->
            <section id="selection" class="showroom__section">
                <div class="showroom__section-header">
                    <span class="showroom__section-index">05</span>
                    <h2 class="showroom__section-title">Selection</h2>
                    <div class="showroom__section-tags">
                        <span>BbCheckbox</span><span>BbSwitch</span><span>BbRadio</span
                        ><span>BbSlider</span><span>BbRating</span>
                    </div>
                </div>

                <div class="showroom__cols">
                    <!-- Checkboxes -->
                    <div>
                        <div class="showroom__group-label">BbCheckbox</div>
                        <div class="showroom__card showroom__demo-row--vertical">
                            <BbCheckbox
                                v-model="checkbox1"
                                label="Enable notifications"
                            />
                            <BbCheckbox
                                v-model="checkbox2"
                                label="Subscribe to newsletter"
                            />
                            <BbCheckbox
                                :model-value="true"
                                label="Accepted terms"
                                :disabled="true"
                            />
                            <BbCheckbox
                                :model-value="false"
                                label="Marketing emails"
                                :disabled="true"
                            />
                        </div>
                    </div>

                    <!-- Switches -->
                    <div>
                        <div class="showroom__group-label">BbSwitch</div>
                        <div class="showroom__card showroom__demo-row--vertical">
                            <BbSwitch v-model="switch1" label="Dark mode" />
                            <BbSwitch v-model="switch2" label="Auto-save enabled" />
                            <BbSwitch :model-value="true" label="Two-factor auth" :disabled="true" />
                            <BbSwitch :model-value="false" label="Beta features" :disabled="true" />
                        </div>
                    </div>
                </div>

                <div class="showroom__cols" style="margin-top: 16px">
                    <!-- Slider -->
                    <div>
                        <div class="showroom__group-label">BbSlider</div>
                        <div class="showroom__card">
                            <BbSlider
                                v-model="sliderValue"
                                label="Response timeout (ms)"
                                :min="0"
                                :max="100"
                                :step="1"
                            />
                            <div class="showroom__item-label" style="margin-top: 12px">
                                Value: {{ sliderValue }}
                            </div>
                        </div>
                    </div>

                    <!-- Rating -->
                    <div>
                        <div class="showroom__group-label">BbRating</div>
                        <div class="showroom__card">
                            <BbRating v-model="ratingValue" label="Rate this component" />
                            <div class="showroom__item-label" style="margin-top: 12px">
                                Rating: {{ ratingValue }} / 5
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RadioGroup -->
                <div class="showroom__group" style="margin-top: 16px">
                    <div class="showroom__group-label">BbRadioGroup</div>
                    <div class="showroom__card">
                        <BbRadioGroup
                            v-model="radioValue"
                            legend="Deployment target"
                            name="deployment"
                            :items="radioItems"
                        />
                    </div>
                </div>
            </section>
        </main>

        <!-- Global toast container -->
        <BbToast placement="bottom-end" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    BbAlert,
    BbAvatar,
    BbBadge,
    BbButton,
    BbCheckbox,
    BbChip,
    BbAccordion,
    BbBreadcrumbs,
    BbNumberInput,
    BbPagination,
    BbProgress,
    BbRadioGroup,
    BbRating,
    BbSelect,
    BbSlider,
    BbSpinner,
    BbSwitch,
    BbTab,
    BbTable,
    BbTextarea,
    BbTextInput,
    BbToast,
    useToast,
} from 'bitboss-ui'
import 'bitboss-ui/styles.css'

const { toast: addToast } = useToast()

const sections = [
    { id: 'feedback', label: 'Feedback' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'data', label: 'Data Display' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'selection', label: 'Selection' },
]

// ── Button state ────────────────────────────────────
const buttonLoading = ref(false)
const simulateLoad = async () => {
    buttonLoading.value = true
    await new Promise((r) => setTimeout(r, 2000))
    buttonLoading.value = false
}

// ── Input state ─────────────────────────────────────
const textInput = ref<string | null>(null)
const textareaValue = ref<string | null>(null)
const numberValue = ref<number | null>(null)
const selectSingle = ref(null)
const selectMultiple = ref([])

const frameworkItems = ['Laravel', 'Vue 3', 'Nuxt', 'Inertia.js', 'Livewire']
const tagItems = ['frontend', 'backend', 'fullstack', 'api', 'ui', 'ux', 'devops']

// ── Table ────────────────────────────────────────────
const tableColumns = [
    { key: 'component', label: 'Component' },
    { key: 'category', label: 'Category' },
    { key: 'status', label: 'Status' },
    { key: 'version', label: 'Since' },
]
const tableItems = [
    { component: 'BbButton', category: 'Input', status: 'Stable', version: 'v1.0' },
    { component: 'BbSelect', category: 'Selection', status: 'Stable', version: 'v1.0' },
    { component: 'BbTable', category: 'Data', status: 'Stable', version: 'v2.0' },
    { component: 'BbDialog', category: 'Overlay', status: 'Stable', version: 'v1.2' },
    { component: 'BbToast', category: 'Feedback', status: 'Stable', version: 'v1.5' },
    { component: 'BbTree', category: 'Navigation', status: 'Stable', version: 'v2.0' },
]

// ── Navigation ───────────────────────────────────────
const currentTab = ref('overview')
const tabItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'components', label: 'Components' },
    { key: 'tokens', label: 'Tokens' },
    { key: 'changelog', label: 'Changelog' },
]

const accordion1 = ref(false)
const accordion2 = ref(false)
const accordion3 = ref(false)

const currentPage = ref(3)

const breadcrumbItems = [
    { key: 'home', text: 'Home', href: '#' },
    { key: 'ds', text: 'Design System', href: '#' },
    { key: 'components', text: 'Components', href: '#' },
    { key: 'current', text: 'BbBreadcrumbs' },
]

// ── Selection ────────────────────────────────────────
const checkbox1 = ref(true)
const checkbox2 = ref(false)
const switch1 = ref(true)
const switch2 = ref(false)
const sliderValue = ref(45)
const ratingValue = ref(3)
const radioValue = ref('production')
const radioItems = [
    { label: 'Production', value: 'production' },
    { label: 'Staging', value: 'staging' },
    { label: 'Development', value: 'development' },
]

// ── Toast ────────────────────────────────────────────
const triggerToast = (type: 'success' | 'error' | 'info') => {
    const messages = {
        success: {
            title: 'Deployment complete',
            text: 'Your application is now live on production.',
        },
        error: {
            title: 'Build failed',
            text: 'An error occurred during the pipeline execution.',
        },
        info: {
            title: 'Sync in progress',
            text: 'Pulling latest changes from the remote branch.',
        },
    }
    addToast({ ...messages[type], timeout: 4000 })
}
</script>

<style src="../../css/showroom.css"></style>
