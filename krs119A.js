//krs kelas A

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

var ids = ['189400', '189402', '192569', '189405', '189408', '189411'];

for (var i = 0; i < ids.length; i++) {
    add_krs(ids[i]);
}
