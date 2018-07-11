//==============================
function showList(str, typeSearch)
{
    console.log(typeSearch);
    if (str == "")
    {
        if (window.XMLHttpRequest)
        {

        }
        else
        {

        }
        xmlhttp.onreadystatechange = function ()
        {

        }
        xmlhttp.open("GET", "getdata.php?q="+str+"&type=" + typeSearch,true);
        xmlhttp.send();
    }
}
//==============================
function printArray(arr)
{
    arr.toString();

}
//==============================
function parseJson(result)
{

}