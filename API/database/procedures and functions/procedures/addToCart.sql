CREATE DEFINER=`root`@`localhost` PROCEDURE `addToCart`(
in numberproId int,
in numberCartId int,
in numberquantity int,
in numCartdetid int,
in numberUserId int
)
BEGIN
	declare quantirequest int;
    set quantirequest = condormarket.getQuantity(numberproId);
    if(numberCartId =0) then
		insert into shoppingcarts(userid,createdate) values(numberUserId,sysdate());
        set numberCartId = last_insert_id();
    end if;
	if(quantirequest>= numberquantity && numCartdetid =0) then
		insert into cartdetails(shoppingcartid,productid,quantity,purchaseprice) values(numberCartId,numberproId,numberquantity,condormarket.fnGetPrice(numberproId));
		set numCartdetid= last_insert_id();        
        update productdetails set quantity=quantirequest where productid =numberproId;
    end if;
END