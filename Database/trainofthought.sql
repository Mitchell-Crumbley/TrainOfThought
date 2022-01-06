USE [master]
GO

/****** Object:  Database [TrainOfThought]    Script Date: 1/2/2022 12:10:43 PM ******/
CREATE DATABASE [TrainOfThought]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TrainOfThought', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TrainOfThought.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TrainOfThought_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TrainOfThought_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TrainOfThought].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [TrainOfThought] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [TrainOfThought] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [TrainOfThought] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [TrainOfThought] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [TrainOfThought] SET ARITHABORT OFF 
GO

ALTER DATABASE [TrainOfThought] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [TrainOfThought] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [TrainOfThought] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [TrainOfThought] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [TrainOfThought] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [TrainOfThought] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [TrainOfThought] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [TrainOfThought] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [TrainOfThought] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [TrainOfThought] SET  DISABLE_BROKER 
GO

ALTER DATABASE [TrainOfThought] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [TrainOfThought] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [TrainOfThought] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [TrainOfThought] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [TrainOfThought] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [TrainOfThought] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [TrainOfThought] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [TrainOfThought] SET RECOVERY FULL 
GO

ALTER DATABASE [TrainOfThought] SET  MULTI_USER 
GO

ALTER DATABASE [TrainOfThought] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [TrainOfThought] SET DB_CHAINING OFF 
GO

ALTER DATABASE [TrainOfThought] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [TrainOfThought] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [TrainOfThought] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [TrainOfThought] SET QUERY_STORE = OFF
GO

ALTER DATABASE [TrainOfThought] SET  READ_WRITE 
GO
CREATE TABLE [dbo].[Users](
	[Id] [uniqueidentifier] NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[FirebaseKey] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [FirebaseKey]) VALUES (N'145beb4f-54a0-41de-8de8-1e6adb3a38f3', N'Mitchell', N'Crumbley', N'1jBlxr1uECh7OJZNqowbhyoSmTV2')