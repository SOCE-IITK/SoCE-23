import $ from 'jquery'

const content = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
]
  
const img=[
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=9Qfj9S124ojed7s4OWu3a3vbbMC76QYkqczg4L4M-Sc="
]


var a = 0;
function universal(i){
    $('#y').animate({'opacity':0},400,function(){
        $(this).html(content[i]).animate({'opacity':1},200)
    })
    // document.getElementById('img').src=img[j];
    $('#img').animate({'opacity':0},400,function(){
        $(this).attr('src',img[i]).animate({'opacity':1},300)
    })
    let h = document.getElementsByClassName('indicators');
    for(var k=0;k<3;k++){
        h[k].classList.remove('fa-circle')
        h[k].classList.add('fa-circle-thin');
    }
    h[i].classList.remove('fa-circle-thin')
    h[i].classList.add('fa-circle');
}
function customf(){
    a++;
    if(a>2) a = 0;
    universal(a);
    
}
function customp() {
    a--;
    if (a < 0) a = 2;
    universal(a);
    
}
function i1(){
    universal(0);
}
function i2(){
    universal(1);
}
function i3(){
    universal(2);
}
export default function Slider() {
    return (
        <div className='container-fluid slider-parent'>
            <div className='row slider-row'>
                <div className='col-1'></div>
                <div className="col-10 slider-content-col">
                    <div className="container slider-content">
                        <div className="row">
                            <div className="col-lg-4 sl">
                                <img id='img' src='https://images.pexels.com/photos/15286/pexels-photo.jpg'></img>
                            </div>
                            <div className="col-lg-8 sl">
                               <div id='y'>{content[1]} </div> 
                               <button id='read-more' className='btn btn-primary'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
            <div className="row circles">
                <div className="col">
                    <i id='p' onClick={customp} className="fa fa-angle-left"></i>
                    <i className="fa fa-circle indicators" onClick={i1}></i>
                    <i className="fa fa-circle-thin indicators" onClick={i2}></i>
                    <i className="fa fa-circle-thin indicators" onClick={i3}></i>
                    <i id='f' onClick={customf} className="fa fa-angle-right"></i> 
                </div>
            </div>
        </div>
    )
}