export const rocket = async(info)=>{
    console.log(info);

    let plantilla = "";

   


    plantilla+= /*html*/`
    <div id="header__title" class="header__title">
            <div class="load"> ${info} </div>
    </div>`;
    return plantilla
}