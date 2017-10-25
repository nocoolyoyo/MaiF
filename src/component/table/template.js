//模拟数据







export default  {
    //列展示参数
    columns:[
        {   field: "name",
            title: "列名1",
            empty: "-"
        },
        {   field: "gender",
            title: "列名1",

        },
    ],
    //展示数据
    data:[
        {
            name: "<span style='color:red'>哈哈哈</span>",
            title: "",
            gender: 0
        },
        {
            name: "哈哈哈",
            title: "",
            gender: ''
        },
    ],
    isPagination: false,
    //分页参数
    pagination: {
        side: "client",
        perRage: 10,
        perRange: [10,50,100]
    }
};

