CREATE DEFINER=`root`@`localhost` FUNCTION `fnGetPrice`(inproid int) RETURNS decimal(10,2)
    DETERMINISTIC
BEGIN
declare valprice DECIMAL(10,2);
set valprice =0;
select price into valprice from productdetails where productid =inproid;
RETURN valprice;
END