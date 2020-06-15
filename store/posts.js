export const state = () =>({
    all: [
        {
            id: 'BMW',
            title: 'BMW',
            content: 'This Amazing Car'
        },
        {
            id: 'golf',
            title: 'golf',
            content: 'My Favourite Car'
        },
        {
            id: 'opel',
            title: 'opel',
            content: 'A Germian Car'
        }
    ]
})

export const getters = {}

export const mutations = {
    add (state, text) {
        state.all.push({
            id: 'Mazda',
            title: text,
            content: 'Amazing car'
        });
    },
    SETIP(state, ip) {
        console.log('inside setip');
        state.Ip = ip;
    }
}

export const actions = {    
}