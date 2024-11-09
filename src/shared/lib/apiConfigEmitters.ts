type Event = (e: CustomEvent) => void;

// EventEmitter
class ApiConfigEmitter extends EventTarget {
    private eventListeners: Map<string, Event[]> = new Map();

    on(eventName: string, listener: Event) {
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, []);
        }
        this.eventListeners.get(eventName)?.push(listener);

        this.addEventListener(eventName, listener as EventListener);
    }

    emitAll(...args: unknown[]) {
        this.eventListeners.forEach((eventName, event) => {
            console.log(eventName);

            const customEvent = new CustomEvent(event, { detail: args });
            this.dispatchEvent(customEvent);
        });
    }
}

export default new ApiConfigEmitter();
