function add_krs(id)
{
    var url = "https://siakad.unj.ac.id/isi_krs/tambahMK";
    var button = "#btnTambah_" + id;
    $.ajax({
        url: url + "/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {
            if (data.status == false){
                alert(data.pesan);
            } else {
                alert(data.pesan);
                $(button).text('KRS');
                $(button).attr('disabled', true);
            }
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert('Error Kesalahan data');
        }
    });
}

var ids = ['5043955', '5043922', '5043950', '5043936', '5043929', '5043863,];

for (var i = 0; i < ids.length; i++) {
    add_krs(ids[i]);
}
	
