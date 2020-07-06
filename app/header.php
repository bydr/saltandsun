<div class="bg-overlay-layout"></div>

<header class="header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <nav class="dr-navbar navbar navbar-expand-sm d-flex align-items-center w-100">

                    <!-- Brand/logo -->
                    <a class="navbar-brand d-flex align-items-center c-light" href="#">
                        <img src="img/_src/header-logo.png"
                             alt=""
                             title=""
                             class="img-responsive">
                    </a>

                    <?php echo file_get_contents('template-parts/navbar-menu.php'); ?>

                    <div class="mobile-menu d-none">
                        <button class="dr-btn dr-btn__icon mobile-menu__btn">
                            <span class="mobile-menu__icon ic-white ic-align-left"></span>
                        </button>
                        <div class="mobile-menu__drop ">
                            <div class="mobile-menu__wrapper">
                                <div class="btn-group align-items-center d-flex justify-content-center">
                                </div>

                                <?php echo file_get_contents('template-parts/navbar-menu.php'); ?>

                                <div class="btn d-flex align-items-center text-center w-100">
                                    <a href="#" class="dr-btn dr-btn__accent-gradient max-w-250 w-100">форма обратной связи</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="btn-group align-items-center d-flex">
                        <a href="#" class="btn-box">
                            <span class="icon ic-search"></span>
                        </a>
                        <a href="#" class="btn-box">
                            <span class="icon ic-shopping-bag"></span>
                        </a>
                        <a href="#" class="btn-box">
                            <span class="icon ic-user"></span>
                        </a>
                        <a href="#" class="btn-box mobile-menu__show is-active">
                            <span class="icon ic-hamburger"></span>
                        </a>
                        <a href="#" class="btn-box mobile-menu__hide">
                            <span class="icon ic-x"></span>
                        </a>
                    </div>

                    <div class="mobile-menu">
                        <?php echo file_get_contents('template-parts/navbar-menu-responsive.php'); ?>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>


<section class="content-page">


