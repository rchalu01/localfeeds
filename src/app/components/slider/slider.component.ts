import {Component, OnInit, ViewChild} from '@angular/core';
import {IonButton, IonSlides} from "@ionic/angular";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

    @ViewChild('sliderView', {static: false}) sliderView: IonSlides;
    @ViewChild('buttonGo') buttonGo: IonButton;

    slider: any;

    constructor() {
        this.slider = {
            buttonDisabled: true,
            sliderItems: [
                {
                    id: 1,
                    img: 'salad.png',
                    titre: 'Des produits locaux !',
                    description: 'Trouver tous les produits que vous souhaitez et cuisiner de bons petits plats.'
                },
                {
                    id: 2,
                    img: 'food_pack.png',
                    titre: 'Proche de chez vous !',
                    description: 'Participer à l\'économie locale et renforcer vos liens avec producteurs locaux.'
                },
                {
                    id: 3,
                    img: 'fork_and_spoon.png',
                    titre: 'Personnalisable !',
                    description: 'Personnaliser vos préférences pour une expérience unique.'
                }
            ]
        }
    }

    ngOnInit() {

    }

    onSlideChange(slider: any, sliderView: IonSlides) {
        this.checkisEnd(slider, sliderView);
    }

    checkisEnd(slider: any, sliderView: IonSlides) {
        sliderView.isEnd().then((istrue) => {
            slider.buttonDisabled = !istrue;
        });
    }
}
