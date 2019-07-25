/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : bullsandcows

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 24/07/2019 16:06:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for resultTable
-- ----------------------------
DROP TABLE IF EXISTS `resultTable`;
CREATE TABLE `resultTable`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `typeGame` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of resultTable
-- ----------------------------
INSERT INTO `resultTable` VALUES (14, 'Pechenka.io', '4', '17', '1');
INSERT INTO `resultTable` VALUES (15, 'Pechenka.io', '1', '4', '3');
INSERT INTO `resultTable` VALUES (16, 'Pechenka.io', '4', '15', '2');
INSERT INTO `resultTable` VALUES (17, 'Артемка', '2', '65', '1');
INSERT INTO `resultTable` VALUES (18, 'Pechenka.io', '10', '175', '3');
INSERT INTO `resultTable` VALUES (19, 'Pechenka.io', '1', '17', '1');
INSERT INTO `resultTable` VALUES (20, 'Pechenka.io', '1', '1256', '1');
INSERT INTO `resultTable` VALUES (21, 'Pechenka.io', '2', '8', '1');
INSERT INTO `resultTable` VALUES (22, 'Тестовый игрок', '4', '11', '2');

SET FOREIGN_KEY_CHECKS = 1;
