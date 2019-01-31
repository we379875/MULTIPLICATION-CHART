
var template = '';

for (let i = 2; i < 10; i++) {
        var calContentCol1 = '';
        var calContentCol2 = '';
        let calculate = document.querySelector('.calculate');
        for(var k=1;k<4;k++){
            
            calContentCol1 += '<p>'+i+' x '+k+' = '+i*k+'</p>'
              
        }
        
        for(var k=4;k<10;k++){
            
            calContentCol2 += '<p>'+i+' x '+k+' = '+i*k+'</p>'
              
        }
        
        template += `
            <div class="col-4 card">
                <div class="row clearfix">
                    <div class="col-6 col1">
                        <h2>${i}</h2>
                        ${calContentCol1}
                    </div>
                    <div class="col-6 col2">
                        ${calContentCol2}
                    </div>
                </div>
            </div>
        `
        calculate.innerHTML = template;    
}





