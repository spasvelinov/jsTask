requirejs.config({
    baseUrl: 'js'
});

define(['jquery'], function ($) {

    redirect();
    btnSave();
    clearStorage();
    edit();

    function storeLocalStorage(){
        var firstName = $('#firstname').val();
        var lastName = $('#lastname').val();
        var role = $('#role').val();
    
        const profile = {
            firstName: firstName,
            lastName: lastName,
            role: role,
        }
        localStorage.setItem('profile',JSON.stringify(profile));
    }

    function clearStorage(){
        $('#delete').click(function() {
            localStorage.clear();
            $('.save-profile').hide();
            $('.create-profile').show();
        });
    }

    function retrieveProfile(){
        var profile = JSON.parse(localStorage.getItem('profile'));
        $('.person-name').html(profile.firstName + ' ' + profile.lastName);
        $('.person-role').html(profile.role);
    }

    function btnSave() {
        $('#save').on('click', function() {
            storeLocalStorage();
            retrieveProfile();
            $('.save-profile').hide();
            $('.edit-profile').show();
        });
    }

    //Didn't manage to redirect to/from edit.html page and used jQuery to show/hide content in order to achieve the design

    function redirect(){
        $('#create').click(function() {
            $('.save-profile').show();
            $('.create-profile').hide();
            $('.edit-profile').hide();
        });
    }

    function edit(){
        $('#edit').click(function() {
            $('.save-profile').show();
            $('.create-profile').hide();
            $('.edit-profile').hide();
        });
    }
    
});
