const INITIAL_STATE = {
    items: [
        {
            id: 1,
            title: 'Hats',
            imgUrl: "https://images.unsplash.com/photo-1486559015136-da87c2012ccb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
            linkPath: 'shop/hats'                  
        },
        {
            id: 2,
            title: 'Jackets',
            imgUrl: "https://images.unsplash.com/photo-1503595011362-307ed2ab9e8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",                   
            linkPath: 'shop/jackets'  
        },
        {
            id: 3,
            title: 'Sneakers',
            imgUrl: "https://images.unsplash.com/photo-1590483467032-2ecd0559da65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",                   
            linkPath: 'shop/sneakers'  
        },
        {
            id: 4,
            title: 'Womens',
            imgUrl: "https://images.unsplash.com/photo-1613594526783-3284e5eb86de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxzaGlydCUyMHN0cmVldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",   
            size: 'large', 
            linkPath: 'shop/womens'                 
        },
        {
            id: 5,
            title: 'Mens',
            imgUrl: "https://images.unsplash.com/photo-1618769122190-df76dfa92d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",           
            size: 'large',   
            linkPath: 'shop/mens'          
        }
    ]
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default menuReducer;