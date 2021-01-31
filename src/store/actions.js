export default {
    increasmentAsync(store) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    store.commit('increasment');
                    resolve();
                }, 2000);
            } catch (err) {
                reject(err);
            }
        });
    },
    changeTypeAsync(store, newType) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    store.commit('changeType', newType);
                    resolve();
                }, 2000);
            } catch (err) {
                reject(err);
            }
        });
    },
};
