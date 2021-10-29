-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: react_blog
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_user`
--

DROP TABLE IF EXISTS `admin_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `userName` varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_user`
--

LOCK TABLES `admin_user` WRITE;
/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'test','88888888');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) DEFAULT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `article_content` text COLLATE utf8_unicode_ci,
  `introduce` text COLLATE utf8_unicode_ci,
  `addTime` int(11) DEFAULT NULL,
  `view_count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (8,1,'Aloha-Music-修bug-01','1.chrome浏览器无法访问本地---安全问题','AlohaMusic',1629734400,1044),(9,1,'js-操作数组的坑-splice','1.splice()\n数组是引用类型，splice()会删除所引用的地址里面的值。\n\n都是通过数组songList\n\nthis.playList.push(songinfo);\n\nhis.$store.commit(\"setAllSongsToPlayList\", this.playList);\n\n就是因为数组是引用类型，所以都是指向同一个数组地方，当splice修改数组的时候，直接修改了引用地址，从而导致所有引用到这个数组的地址都移除了。\n\n解决办法：\n\n```\nlet deleteIndex = state.songList.findIndex(item => item.id === id)\n        let copySongList = [ ]\n        state.songList.forEach(item => {\n            if(item.id != id){\n                copySongList.push(item)\n            }\n        });\n        state.songList = copySongList\n        // state.songList.splice(deleteIndex, 1)\n```\n\n','splice',1629734400,1006),(10,1,'js操作数组的方法总结','**数组的增删**\n\n**1 . push() ， pop()  和 shift() unshift() ；**\n\n**效果：**\n\npush是最常用的了，屁股上追加 ， pop()相反在屁股上扣掉一个\n\nshift和unshift就相反是在头部开刀了 ， 他们除了push()都用的不多，主要因为只能一个一个操作，而且只能在头尾\n\n**返回值**\n\npush和unshift是头尾增加后返回长度，\n\npop和shift返回他们删除的值\n\n**2 . splice() slice() concat()**\n\n这个方法是删除用的，但是不是删除头尾固定的一个，而是想删除哪一个就哪一个。\n\n**效果：**\n\n```\nvar` `arr = [ 29 , 100 , 104 , 55] ;``console.log(arr.splice(1,2))``console.log(arr)\n```\n\n删除俩个参数，从arr[1]开始，就是100，104被删掉了\n\nsplice接受第更多参数，就变成是插入的数组元素，就像下边的concat一样插入多个\n\nslice接受两个参数，表示从哪到哪的被截取下来\n\nconcat() 里边可以继续写数组 如concat(6,1,2,4);\n\n就会把数组拼起来，但依然只是放在屁股上的，只不过放连续好几个而已\n\n**返回值**\n\nsplice()为删掉的值\n\nconcat()为拼合后的新数组\n\n **注意：数组有的方法不会改变原来数组，如slice concat会返回新数组，但是不会改变原来的数组**\n\n \n\n**数组的变形**\n\n join() split()\n\njoin可以把数组变成字符串，接受参数返回字符串，数组本身不变\n\nsplit接受参数，返回字符串以参数分割的数组\n\n**数组的排序**\n\nsort() reverse()\n\nsort()接受参数为排序方法，例如sort(function(){\n\n　　return a-b\n\n})  返回新数组\n\n reverse()不接受参数，数组被反转。返回新数组\n\n**注意：他们都会改变数组原来的形式**\n\n**ES5新方法**\n\nes5新加了一些厉害了的东西，例如find,findIndex,reduce,forEach,every,map, filter,说起来比较多，但是都不复杂，官方文档讲的十分清楚啦。\n\n**forEach(callback[,thisArg]),**\n\n**map\\**(callback[,thisArg])\\****\n\nforEach接收一个回调来操作每一个元素callback又接收三个参数，元素value,index,调用forEach的array [,thisArg]意思是选填的参数，代表callback中的this\n\n没错，他就是和jquery的each一样，注意：参数顺序不同\n\nmap和forEach一样，只不过每次操作一个元素可以有个返回值，然后构成新数组\n\n```\nvar arr = [ 29 , 100 , 104 , 55] ;\nconsole.log(arr.map(function(){\n    return 1\n}))\n```\n\n \n\n**find(callback[,thisArg]),**\n\n**findIndex(callback[,thisArg])**\n\n方法返回数组中满足提供的测试函数的第一个元素的值。它和forEach接收的参数一样一样的。\n\n例如：\n\n```\nfunction isBigEnough(element) {\n  return element >= 15;\n}\n\n[12, 5, 8, 130, 44].find(isBigEnough); // 130\n```\n\n \n\n```\nfunction isBigEnough(element) {\n  return element >= 15;\n}\n\n[12, 5, 8, 130, 44].findIndex(isBigEnough); // 3\n```\n\n \n\n两个区别就是一个返回第一个满足要求的元素索引，一个返回元素值 \n\n**every(callback[,thisArg]),**\n\n**filter\\**(callback[,thisArg])\\**,**\n\n***\\*some\\*\\*(callback[,thisArg])\\*\\**\\***\n\n 这三个玩意是用来过滤的，every()some()返回true,false，前者返回是否全部通过，后者返回是否有人通过\n\n```\nvar arr = [ 29 , 100 , 104 , 55] ;\nconsole.log(arr.some(function(element){\n    return element > 30\n}))\n```\n\n \n\n //true，表示有东西通过\n\n```\nvar arr = [ 29 , 100 , 104 , 55] ;\nconsole.log(arr.every(function(element){\n    return element > 30\n}))\n```\n\n \n\n //false，并非全部通过\n\n```\nvar arr = [ 29 , 100 , 104 , 55] ;\nconsole.log(arr.filter(function(element){\n    return element > 30\n}))\n```\n\n \n\n//[100, 104, 55]  //通过元素构成的新数组\n\n**reduce(callback,init)和reduceRight(\\**callback,init\\**)**\n\n```\nvar arr = [ 29 , 100 , 104 , 55] ;\nconsole.log(arr.reduce(function(a,b){\n    console.log(a,b)\n    return a-b\n},0))\n```\n\n![img](https://images2015.cnblogs.com/blog/1038264/201702/1038264-20170210170513104-1387552157.png)\n\n以init为初始值，进行init , 元素1 ，然后 元素1 ，元素2这样的方法进行遍历迭代回掉运算，\n\ninit也可没有，就直接元素1，元素2然后元素2，元素3这样遍历\n\nreduceRight就不解释了\n\n **include(value[,fromIndex])**\n\n数组是否包含value，是返回0，不是返回-1\n\n \n\n这些的兼容还不错，include不兼容ie，find不兼容opera其他的都差不多','js操作数组的方法总结',1629734400,1025);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `typeName` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `orderNum` int(11) DEFAULT NULL,
  `icon` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'首页',1,'<HomeOutlined/>'),(2,'视频',2,'<YoutubeOutlined/>'),(3,'Blackpink',3,'<SmileOutlined/>'),(4,'生活分享',4,'<SmileOutlined/>');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-08 21:08:47
