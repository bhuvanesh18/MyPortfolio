import React, { Component } from 'react';
import $ from 'jquery';;

class DarkTheme extends Component {
    constructor(props) {
        super(props)
        this._changeToDarkTheme = this._changeToDarkTheme.bind(this);
    }
    
    componentDidMount(){
        this._changeToDarkTheme();
    }

    _changeToDarkTheme(){
        $('#darkTheme').on('click',function(){
            if($('#darkTheme').prop('checked')===true){
                $('body').css({'color':'#fff','background-color':'#212529'});
                $('.card-body').css({'color':'#fff','background-color':'#212529'});
                $('.card-footer').css('background-color','#212529');
                $('#nav-header').css('background-color','#007bff');
                $('#side-nav').css('background-color','#007bff');
                $('#drag-side-nav').css('background-color','#212529');
                $('.list-group-item').css('background-color','inherit');
                $('.modal-content').css('background-color','#212529');
                $('.close').css('color','inherit');
                $('.badge').toggleClass('badge-dark badge-light');
                $('#side-nav').toggleClass('border-dark border-light');
            }else{
                $('body').css({'color':'#212529','background-color':'#fff'});
                $('.card-body').css({'color':'#212529','background-color':'#fff'});
                $('.card-footer').css('background-color','rgba(0,0,0,.03)');
                $('#nav-header').css('background-color','#007bff');
                $('#side-nav').css('background-color','#007bff')
                $('#drag-side-nav').css('background-color','#fff');
                $('.list-group-item').css('background-color','#fff');
                $('.modal-content').css('background-color','#fff');
                $('.close').css({'color':'#000','opacity':'0.5'});
                $('.badge').toggleClass('badge-light badge-dark');
                $('#side-nav').toggleClass('border-light border-dark');
            }
        });
    }

    render() {
        return (
             <div className="clearfix pl-5 ml-3 mb-5">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="darkTheme"/>
                    <label className="custom-control-label text-success" htmlFor="darkTheme">Dark Theme</label>
                </div>
            </div>
        )
    }
}

export default DarkTheme
