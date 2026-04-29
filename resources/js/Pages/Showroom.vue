<template>
    <!-- BbToast and BbDialog must live OUTSIDE the grid container,
         otherwise they consume a grid cell and break the sidebar layout. -->
    <BbToast placement="top-end" />

    <div class="showroom">
        <!-- Sidebar -->
        <aside class="showroom__sidebar">
            <div class="showroom__sidebar-inner">
                <div class="showroom__sidebar-logo">
                    <span class="showroom__sidebar-dot" />
                    <span>Showroom</span>
                </div>
                <nav class="showroom__nav">
                    <a
                        v-for="section in sections"
                        :key="section.id"
                        :href="`#${section.id}`"
                        class="showroom__pill"
                        :class="{ 'showroom__pill--active': activeSection === section.id }"
                        @click.prevent="scrollTo(section.id)"
                    >
                        {{ section.label }}
                    </a>
                </nav>
            </div>
        </aside>

        <!-- Main -->
        <main class="showroom__main">

            <!-- Typography -->
            <section id="typography" class="showroom__section">
                <h2 class="showroom__section-title">Typography</h2>
                <p class="showroom__section-subtitle">Scala tipografica — Plus Jakarta Sans per heading, DM Sans per body.</p>
                <div class="showroom__card">
                    <h1>Heading 1 — Piano Nutrizionale</h1>
                    <h2>Heading 2 — Analisi del Paziente</h2>
                    <h3>Heading 3 — Macronutrienti</h3>
                    <h4>Heading 4 — Parametri clinici</h4>
                    <h5>Heading 5 — Note integrative</h5>
                    <h6>Heading 6 — Categoria</h6>
                    <p style="margin-top: 16px">Testo body — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    <p><small style="color: var(--color-text-muted); font-size: 12px">Testo piccolo — Dati aggiornati al 28 aprile 2026.</small></p>
                    <p><strong>Grassetto</strong> — <em>Corsivo</em> — <code>codice inline</code></p>
                    <blockquote>Una dieta equilibrata è la base di ogni piano nutrizionale efficace e sostenibile.</blockquote>
                </div>
            </section>

            <!-- Buttons -->
            <section id="buttons" class="showroom__section">
                <h2 class="showroom__section-title">Buttons</h2>
                <p class="showroom__section-subtitle">Varianti, dimensioni e stati di BbButton.</p>
                <div class="showroom__card">
                    <div class="showroom__row">
                        <BbButton text="Primary" @click="log('primary')" />
                        <BbButton text="Ghost" variant="ghost" @click="log('ghost')" />
                    </div>
                    <div class="showroom__row showroom__row--mt">
                        <BbButton text="Extra Small" size="xs" />
                        <BbButton text="Small" size="sm" />
                        <BbButton text="Medium" size="md" />
                        <BbButton text="Large" size="lg" />
                    </div>
                    <div class="showroom__row showroom__row--mt">
                        <BbButton text="Disabilitato" disabled />
                        <BbButton text="Caricamento..." :loading="true" />
                        <BbButton icon="close" tooltip="Elimina voce" @click="log('icon')" />
                    </div>
                    <p v-if="lastAction" class="showroom__status">Azione: {{ lastAction }}</p>
                </div>
            </section>

            <!-- Inputs -->
            <section id="inputs" class="showroom__section">
                <h2 class="showroom__section-title">Inputs</h2>
                <p class="showroom__section-subtitle">Campi form con v-model attivo. Valore corrente mostrato sotto ogni campo.</p>
                <div class="showroom__card">
                    <div class="showroom__grid-2">
                        <div>
                            <BbTextInput v-model="form.name" label="Nome paziente" placeholder="Mario Rossi" />
                            <span class="showroom__value">{{ form.name || '—' }}</span>
                        </div>
                        <div>
                            <BbTextInput v-model="form.email" label="Email" type="email" placeholder="mario@example.com" />
                            <span class="showroom__value">{{ form.email || '—' }}</span>
                        </div>
                        <div>
                            <BbTextInput v-model="form.password" label="Password" type="password" placeholder="••••••••" />
                            <span class="showroom__value">{{ form.password ? '••••••' : '—' }}</span>
                        </div>
                        <div>
                            <BbNumberInput v-model="form.weight" label="Peso (kg)" :min="30" :max="300" :step="0.5" />
                            <span class="showroom__value">{{ form.weight ?? '—' }}</span>
                        </div>
                        <div>
                            <BbSelect v-model="form.diet" label="Tipo di dieta" :options="dietOptions" />
                            <span class="showroom__value">{{ form.diet || '—' }}</span>
                        </div>
                        <div>
                            <BbTextarea v-model="form.notes" label="Note cliniche" placeholder="Inserire note..." />
                            <span class="showroom__value">{{ form.notes || '—' }}</span>
                        </div>
                    </div>

                    <div class="showroom__grid-2 showroom__row--mt">
                        <BbTextInput v-model="form.name" label="Campo disabilitato" disabled />
                        <BbTextInput
                            v-model="form.emailError"
                            label="Campo con errore"
                            :has-errors="true"
                            :errors="['Email non valida']"
                        />
                    </div>

                    <div class="showroom__row showroom__row--mt" style="align-items: flex-start; gap: 32px">
                        <div>
                            <BbCheckbox v-model="form.consent" label="Consenso trattamento dati" />
                            <span class="showroom__value">{{ form.consent ? 'Sì' : 'No' }}</span>
                        </div>
                        <div>
                            <BbRadioGroup v-model="form.gender" label="Sesso" :options="genderOptions" />
                            <span class="showroom__value">{{ form.gender || '—' }}</span>
                        </div>
                        <div>
                            <BbSwitch v-model="form.darkMode" label="Modalità scura" />
                            <span class="showroom__value">{{ form.darkMode ? 'Attiva' : 'Disattiva' }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Feedback -->
            <section id="feedback" class="showroom__section">
                <h2 class="showroom__section-title">Feedback</h2>
                <p class="showroom__section-subtitle">Alert, badge, chip, toast e progress.</p>
                <div class="showroom__card">
                    <div class="showroom__stack">
                        <BbAlert v-if="alerts.info"     v-model="alerts.info"    theme="info"    title="Informazione" text="Il paziente ha aggiornato il suo piano nutrizionale." :show-close="true" />
                        <BbAlert v-if="alerts.success"  v-model="alerts.success" theme="success" title="Successo"     text="Piano salvato correttamente." :show-close="true" />
                        <BbAlert v-if="alerts.warning"  v-model="alerts.warning" theme="warning" title="Attenzione"   text="L'indice BMI è superiore alla norma." :show-close="true" />
                        <BbAlert v-if="alerts.error"    v-model="alerts.error"   theme="error"   title="Errore"       text="Impossibile salvare i dati. Riprovare." :show-close="true" />
                        <BbButton
                            v-if="!alerts.info && !alerts.success && !alerts.warning && !alerts.error"
                            text="Ripristina alert"
                            size="sm"
                            variant="ghost"
                            @click="resetAlerts"
                        />
                    </div>

                    <div class="showroom__row showroom__row--mt">
                        <BbBadge content="Nuovo" color="success" />
                        <BbBadge content="12" color="danger" />
                        <BbBadge content="In revisione" color="warning" />
                        <BbBadge content="Archiviato" />
                    </div>

                    <div class="showroom__row showroom__row--mt">
                        <BbChip v-for="chip in chips" :key="chip" :text="chip" :clearable="true" @click:clear="removeChip(chip)" />
                        <span v-if="chips.length === 0" class="showroom__value">Nessun chip rimasto</span>
                    </div>

                    <div class="showroom__row showroom__row--mt">
                        <BbButton text="Toast Info"     size="sm" @click="fireToast('info')" />
                        <BbButton text="Toast Successo" size="sm" @click="fireToast('success')" />
                        <BbButton text="Toast Warning"  size="sm" @click="fireToast('warning')" />
                        <BbButton text="Toast Errore"   size="sm" @click="fireToast('error')" />
                    </div>

                    <div class="showroom__row--mt">
                        <p style="margin-bottom: 6px; font-size: 13px; color: var(--color-text-muted)">Progress — {{ progressValue }}%</p>
                        <BbProgress v-model="progressValue" :min="0" :max="100" />
                        <div class="showroom__row" style="margin-top: 8px">
                            <BbButton text="−10" size="sm" variant="ghost" @click="progressValue = Math.max(0, progressValue - 10)" />
                            <BbButton text="+10" size="sm"                 @click="progressValue = Math.min(100, progressValue + 10)" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Navigation -->
            <section id="navigation" class="showroom__section">
                <h2 class="showroom__section-title">Navigation</h2>
                <p class="showroom__section-subtitle">Tab, accordion, breadcrumbs e paginazione.</p>
                <div class="showroom__card">

                    <BbBreadcrumbs :items="breadcrumbItems" />

                    <div style="margin-top: 20px">
                        <BbTab v-model="activeTab" :items="tabItems" :animate-x="true">
                            <template #pane:overview>
                                <div class="showroom__tab-pane">
                                    <strong>Panoramica</strong>
                                    <p>Riepilogo del piano nutrizionale con indicatori chiave di salute.</p>
                                </div>
                            </template>
                            <template #pane:macros>
                                <div class="showroom__tab-pane">
                                    <strong>Macronutrienti</strong>
                                    <p>Distribuzione di proteine, carboidrati e grassi nel piano giornaliero.</p>
                                </div>
                            </template>
                            <template #pane:history>
                                <div class="showroom__tab-pane">
                                    <strong>Storico</strong>
                                    <p>Evoluzione del peso e degli indicatori metabolici nel tempo.</p>
                                </div>
                            </template>
                        </BbTab>
                    </div>

                    <div class="showroom__accordion-group">
                        <BbAccordion v-model="accordion.a1">
                            <template #header>Analisi antropometrica</template>
                            <template #default>
                                Peso, altezza, BMI, circonferenza vita e fianchi. Aggiornati al 28/04/2026.
                            </template>
                        </BbAccordion>
                        <BbAccordion v-model="accordion.a2">
                            <template #header>Obiettivi nutrizionali</template>
                            <template #default>
                                Fabbisogno calorico giornaliero stimato: 2.100 kcal. Proteine: 130g, Carboidrati: 220g, Grassi: 70g.
                            </template>
                        </BbAccordion>
                        <BbAccordion v-model="accordion.a3">
                            <template #header>Intolleranze e allergie</template>
                            <template #default>
                                Intolleranza al lattosio confermata. Allergia alle arachidi (grado lieve).
                            </template>
                        </BbAccordion>
                    </div>

                    <div style="margin-top: 20px; display: flex; align-items: center; gap: 16px">
                        <BbPagination v-model="currentPage" :total-pages="totalPages" align="left" />
                        <span class="showroom__value">Pagina {{ currentPage }} / {{ totalPages }}</span>
                    </div>
                </div>
            </section>

            <!-- Overlays -->
            <section id="overlays" class="showroom__section">
                <h2 class="showroom__section-title">Overlays</h2>
                <p class="showroom__section-subtitle">Dialog, dropdown, popover e tooltip — tutti interattivi.</p>
                <div class="showroom__card">
                    <div class="showroom__row">
                        <BbButton text="Apri Dialog" @click="isDialogOpen = true" />

                        <BbDropdown :items="dropdownItems" placement="bottom-start">
                            <template #activator>
                                <BbButton text="Dropdown ▾" variant="ghost" />
                            </template>
                        </BbDropdown>

                        <BbPopover placement="top">
                            <template #activator>
                                <BbButton text="Popover" variant="ghost" />
                            </template>
                            <template #default>
                                <p style="font-size: 13px; margin: 0; max-width: 220px">
                                    Informazioni aggiuntive sul paziente selezionato. Clicca fuori per chiudere.
                                </p>
                            </template>
                        </BbPopover>

                        <BbButton
                            text="Con Tooltip"
                            variant="ghost"
                            tooltip="Tooltip di supporto contestuale"
                        />
                    </div>
                    <p v-if="overlayResult" class="showroom__status">{{ overlayResult }}</p>
                </div>
            </section>

            <!-- Data Display -->
            <section id="data" class="showroom__section">
                <h2 class="showroom__section-title">Data Display</h2>
                <p class="showroom__section-subtitle">Tabella pazienti, avatar e icone.</p>
                <div class="showroom__card">

                    <div class="showroom__row" style="margin-bottom: 20px">
                        <BbAvatar src="https://i.pravatar.cc/64?img=1" alt="Mario Rossi"   size="lg" />
                        <BbAvatar initials="GV" size="lg" />
                        <BbAvatar size="lg" />
                        <BbAvatar src="https://i.pravatar.cc/64?img=3" alt="Laura Bianchi" size="md" />
                        <BbAvatar initials="AB" size="md" />
                        <BbAvatar initials="XY" size="sm" />
                    </div>

                    <div class="showroom__row showroom__row--wrap" style="margin-bottom: 20px">
                        <div v-for="icon in iconList" :key="icon" class="showroom__icon-item">
                            <BbIcon :type="icon" :size="20" />
                            <span>{{ icon }}</span>
                        </div>
                    </div>

                    <BbTable :columns="tableColumns" :rows="tableRows" />
                </div>
            </section>

        </main>

    </div>

    <!-- Dialog also outside the grid for the same reason -->
    <BbDialog v-model="isDialogOpen" title="Elimina piano nutrizionale">
        <template #default>
            <p style="font-size: 14px; color: var(--color-text-muted)">
                Sei sicuro di voler eliminare il piano nutrizionale del paziente? Questa azione è irreversibile.
            </p>
        </template>
        <template #footer>
            <BbButton text="Annulla" variant="ghost"  @click="closeDialog('cancel')" />
            <BbButton text="Elimina" variant="danger" @click="closeDialog('confirm')" />
        </template>
    </BbDialog>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import {
    BbButton,
    BbTextInput,
    BbTextarea,
    BbNumberInput,
    BbSelect,
    BbCheckbox,
    BbRadioGroup,
    BbSwitch,
    BbAlert,
    BbBadge,
    BbChip,
    BbToast,
    BbProgress,
    BbTab,
    BbAccordion,
    BbBreadcrumbs,
    BbPagination,
    BbDialog,
    BbDropdown,
    BbPopover,
    BbTable,
    BbAvatar,
    BbIcon,
    useToast,
} from 'bitboss-ui';

const { toast } = useToast();

// ── Sections ──────────────────────────────────────────────
const sections = [
    { id: 'typography', label: 'Typography' },
    { id: 'buttons',    label: 'Buttons' },
    { id: 'inputs',     label: 'Inputs' },
    { id: 'feedback',   label: 'Feedback' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'overlays',   label: 'Overlays' },
    { id: 'data',       label: 'Data Display' },
];

const activeSection = ref('typography');

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeSection.value = id;
}

let observer;
onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => { entries.forEach(e => { if (e.isIntersecting) activeSection.value = e.target.id; }); },
        { threshold: 0.25 }
    );
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
});
onUnmounted(() => observer?.disconnect());

// ── Buttons ───────────────────────────────────────────────
const lastAction = ref('');
function log(msg) { lastAction.value = msg; console.log('[showroom]', msg); }

// ── Inputs ────────────────────────────────────────────────
const form = reactive({
    name: '', email: '', emailError: 'email@sbagliata', password: '',
    weight: null, diet: null, notes: '', consent: false, gender: null, darkMode: false,
});

const dietOptions = [
    { label: 'Mediterranea',  value: 'med' },
    { label: 'Chetogenica',   value: 'keto' },
    { label: 'Vegana',        value: 'vegan' },
    { label: 'Vegetariana',   value: 'veg' },
    { label: 'Iperproteica',  value: 'high-protein' },
];

const genderOptions = [
    { label: 'Maschio', value: 'M' },
    { label: 'Femmina', value: 'F' },
    { label: 'Altro',   value: 'X' },
];

// ── Feedback ──────────────────────────────────────────────
const alerts = reactive({ info: true, success: true, warning: true, error: true });
function resetAlerts() { Object.keys(alerts).forEach(k => { alerts[k] = true; }); }

const chips = ref(['Diabete tipo 2', 'Ipertensione', 'Celiachia']);
function removeChip(chip) { chips.value = chips.value.filter(c => c !== chip); }

const progressValue = ref(45);

function fireToast(type) {
    const map = {
        info:    { title: 'Informazione', text: 'Dati aggiornati.',          theme: 'info' },
        success: { title: 'Salvato',      text: 'Piano nutrizionale salvato.', theme: 'success' },
        warning: { title: 'Attenzione',   text: 'BMI fuori range ottimale.',  theme: 'warning' },
        error:   { title: 'Errore',       text: 'Connessione al server persa.', theme: 'danger' },
    };
    toast(map[type]);
}

// ── Navigation ────────────────────────────────────────────
const breadcrumbItems = [
    { key: 'dashboard', text: 'Dashboard', href: '#' },
    { key: 'patients',  text: 'Pazienti',  href: '#' },
    { key: 'mario',     text: 'Mario Rossi' },
];

const activeTab = ref('overview');
const tabItems = [
    { key: 'overview', label: 'Panoramica' },
    { key: 'macros',   label: 'Macronutrienti' },
    { key: 'history',  label: 'Storico' },
];

const accordion = reactive({ a1: true, a2: false, a3: false });

const currentPage = ref(1);
const totalPages  = 8;

// ── Overlays ──────────────────────────────────────────────
const isDialogOpen = ref(false);
const overlayResult = ref('');

function closeDialog(action) {
    isDialogOpen.value = false;
    overlayResult.value = action === 'confirm' ? 'Confermato: piano eliminato.' : 'Azione annullata.';
}

const dropdownItems = [
    { key: 'view',   text: 'Visualizza dettaglio', onClick: () => { overlayResult.value = 'Dropdown → Visualizza dettaglio'; } },
    { key: 'edit',   text: 'Modifica piano',        onClick: () => { overlayResult.value = 'Dropdown → Modifica piano'; } },
    { key: 'export', text: 'Esporta PDF',           onClick: () => { overlayResult.value = 'Dropdown → Esporta PDF'; } },
];

// ── Data Display ──────────────────────────────────────────
const iconList = ['close', 'check', 'warning', 'info', 'search', 'edit', 'trash', 'arrow-right'];

const tableColumns = [
    { key: 'name',   label: 'Paziente',  sortable: true },
    { key: 'age',    label: 'Età' },
    { key: 'bmi',    label: 'BMI',       sortable: true },
    { key: 'diet',   label: 'Dieta' },
    { key: 'status', label: 'Stato' },
];

const tableRows = [
    { name: 'Mario Rossi',   age: 42, bmi: '24.5', diet: 'Mediterranea',  status: 'Attivo' },
    { name: 'Laura Bianchi', age: 35, bmi: '21.3', diet: 'Vegana',        status: 'Attivo' },
    { name: 'Carlo Verdi',   age: 58, bmi: '28.7', diet: 'Chetogenica',   status: 'In revisione' },
    { name: 'Anna Ferrari',  age: 29, bmi: '19.8', diet: 'Vegetariana',   status: 'Attivo' },
    { name: 'Luca Esposito', age: 47, bmi: '31.2', diet: 'Iperproteica',  status: 'Sospeso' },
];
</script>

<style scoped>
.showroom {
    display: grid;
    grid-template-columns: 200px 1fr;
    min-height: 100vh;
    background-color: var(--color-surface);
}

/* ── Sidebar ──────────────────────────────────────────────── */
.showroom__sidebar {
    background-color: var(--color-surface-raised);
    border-right: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.showroom__sidebar-inner { padding: 24px 16px; }

.showroom__sidebar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 24px;
    letter-spacing: -0.01em;
}

.showroom__sidebar-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-primary);
    flex-shrink: 0;
}

.showroom__nav { display: flex; flex-direction: column; gap: 2px; }

.showroom__pill {
    display: block;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-text-muted);
    padding: 5px 10px;
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 120ms, color 120ms;
    white-space: nowrap;
}

.showroom__pill:hover {
    background-color: var(--color-primary-muted);
    color: var(--color-text);
}

.showroom__pill--active {
    background-color: var(--color-primary-muted);
    color: var(--color-primary);
    font-weight: 600;
}

/* ── Main ─────────────────────────────────────────────────── */
.showroom__main {
    padding: 32px 40px;
    max-width: 860px;
}

.showroom__section {
    padding-bottom: 48px;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 48px;
}

.showroom__section:last-child { border-bottom: none; }

.showroom__section-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 4px;
}

.showroom__section-subtitle {
    font-size: 13px;
    color: var(--color-text-muted);
    margin-bottom: 20px;
}

.showroom__card {
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-radius: var(--bb-radius);
    padding: 20px;
}

/* ── Utilities ────────────────────────────────────────────── */
.showroom__row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
}

.showroom__row--mt  { margin-top: 12px; }
.showroom__row--wrap { flex-wrap: wrap; }

.showroom__stack { display: flex; flex-direction: column; gap: 8px; }

.showroom__grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.showroom__value {
    display: block;
    font-size: 11px;
    color: var(--color-primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    margin-top: 4px;
}

.showroom__status {
    margin-top: 10px;
    font-size: 12px;
    color: var(--color-text-muted);
    font-style: italic;
}

.showroom__tab-pane {
    padding: 16px 0;
    font-size: 14px;
    color: var(--color-text-muted);
    line-height: 1.6;
}

.showroom__accordion-group {
    margin-top: 16px;
    border: 1px solid var(--color-border);
    border-radius: var(--bb-radius);
    overflow: hidden;
}

.showroom__accordion-group > * {
    border-top: 1px solid var(--color-border);
}

.showroom__accordion-group > *:first-child {
    border-top: none;
}

.showroom__icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: var(--color-text-muted);
    width: 64px;
    text-align: center;
}

@media (max-width: 768px) {
    .showroom { grid-template-columns: 1fr; }
    .showroom__sidebar { position: static; height: auto; }
    .showroom__nav { flex-direction: row; flex-wrap: wrap; }
    .showroom__main { padding: 24px 16px; }
    .showroom__grid-2 { grid-template-columns: 1fr; }
}
</style>
