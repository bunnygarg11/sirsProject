 const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'agenda-component',
                'title': 'Agenda',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/agenda'
            },
            {
                'id'   : 'product-component',
                'title': 'Products',
                'type' : 'collapse',
                'icon' : 'shopping_cart',
                 'url': '/product-listing',
                'children': [
                    {
                        'id': 'product-listing',
                        'title': 'Product Listing',
                        'type': 'item',
                        'icon': 'list',
                        'url': '/product-listing'
                    },
                ]
            },
            {
                'id'   : 'service-component',
                'title': 'Services',
                'type' : 'item',
                'icon' : 'airline_seat_recline_normal',
                'url'  : '/services'
            },
            {
                'id'   : 'staff-component',
                'title': 'Staff',
                'type' : 'item',
                'icon' : 'person',
                'url'  : '/staff'
            },
          
            {
                'id'   : 'client-welcome',
                'title': 'Welcome',
                'type' : 'item',
                'icon' : 'home',
                'url'  : '/welcome'
            },
            {
                'id'   : 'client-list',
                'title': 'Client',
                'type' : 'item',
                'icon' : 'view_list',
                'url'  : '/clientlist'
            },

        ]
    }
];

export default navigationConfig;
