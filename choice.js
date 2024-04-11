var provinceArr = ['北京','湖南','湖北'];
        //城市数组
        var cityArr = [
            ['朝阳区','海淀区','东城区'],
            ['长沙','张家界'],
            ['武汉','孝感','襄阳']
        ];
        //自动创建省份下拉菜单
        function createOption(obj,data){        //obj表示下拉菜单的元素对象，data表示数组保存的下拉菜单选项
            for(var i in data){                 //也可以写成for(let i =0;i<data.length;i++)
                var op = new Option(data[i],i); //创建下拉菜单中的option
                                                //Option的第一个参数用于设置显示的文本，第二个参数用于设置value值
                obj.options.add(op);            //将选项添加到下拉菜单中
            }
        }
        var province = document.getElementById('province'); //获取省份元素对象
        createOption(province,provinceArr);
 
        //选择省份后，自动生成对应城市的下拉菜单
        var city = document.getElementById('city');  //获取城市下拉菜单的元素对象
        province.onchange = function(){              //为省份下拉菜单添加事件
            city.options.length = 0;                 //清空city下的所有原有option
            createOption(city,cityArr[province.value]);
        }


const fileInput = document.getElementById('fileInput');
const avatar = document.getElementById('avatar');

fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    avatar.src = e.target.result;
  }
  
  reader.readAsDataURL(file);
});