import { Component, Prop, h } from '@stencil/core';


@Component({
    tag: 'input-example',
    styleUrl: 'input-example.css',
    shadow:true,

})
export class MyComponent {

    @Prop() nameLabel: string = '';

    changed(event:any) {
        console.log(event.target.value) 
            
        };
    

    render() {
        return (
            <div class="container" id='contendero'>
                <h2>Hola Stencil</h2>
                <div class="group">
                    <input type="text" placeholder='nombre'required onChange={(event)=> this.changed(event)}/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>{this.nameLabel}</label>
                </div>
            </div>
            

        );
    }
}