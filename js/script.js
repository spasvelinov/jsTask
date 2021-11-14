requirejs.config({
    baseUrl: 'js'
});

define(['jquery'], function ($) {

    createProfile();
    saveProfile();
    clearStorage();
    retrieveProfile();
    editProfile();

    function createProfile(){
        $('#create').click(function() {
            $('.save-profile').show();
            $('.create-profile').hide();
        });
    }

    function saveProfile() {
        $('#save').on('click', function() {
            storeLocalStorage();
            window.location.href = 'edit.html';
            return false;
        });
    }

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
            window.location.href = 'index.html';
            return false;
        });
    }

    function retrieveProfile(){
        var profile = JSON.parse(localStorage.getItem('profile'));
        $('.person-name').html(profile.firstName + ' ' + profile.lastName);
        $('.person-role').html(profile.role);
    }

    function editProfile(){
        $('#edit').click(function() {
            $('.retrieve-profile').hide();
            $('.edit-profile').show();
            
            var profile = JSON.parse(localStorage.getItem('profile'));
            $('.edit-profile #firstname').val(profile.firstName);
            $('.edit-profile #lastname').val(profile.lastName);
            $('.edit-profile #role').val(profile.role);
        });
    }

});
