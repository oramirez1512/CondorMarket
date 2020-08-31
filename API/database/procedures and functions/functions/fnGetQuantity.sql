CREATE DEFINER=`root`@`localhost` FUNCTION `getQuantity`(numberprodid int) RETURNS int(11)
    DETERMINISTIC
BEGIN
declare valquantity int;
set valquantity =0;
select quantity into valquantity from productdetails where productid =numberprodid;
RETURN valquantity;
END