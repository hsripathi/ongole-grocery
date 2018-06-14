export const OG_SERVICES_URI = {
    rootURL: "http://shanumanthu-dt.ad.linedata.com:3000",

    getGroceryCategroy: {
        path: "grocery_categroy"
    },

    getURL: function (_methodName)
    {
        return this.rootURL + "/" + this[ _methodName ].path;
    }
}