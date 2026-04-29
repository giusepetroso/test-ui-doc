import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/vue3';
import { useBbConfig } from 'bitboss-ui';
import 'bitboss-ui/styles.css';

useBbConfig().setConfig({ inertiaLinkName: 'Link' });

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)
            .mount(el);
    },
});
